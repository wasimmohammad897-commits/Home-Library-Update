import { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addBook } from '../lib/mockApi';

export function AddBookPage() {
  const navigate = useNavigate();
  const { libraryId = '' } = useParams();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    addBook(
      libraryId,
      String(form.get('title') ?? ''),
      String(form.get('author') ?? '')
    );

    navigate(`/libraries/${libraryId}`);
  }

  return (
    <section className="stack-large">
      <div className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Добавление книги</p>
          <h2>Добавить новую книгу</h2>
          <p className="hero-text">
            Заполните данные книги, чтобы добавить её в библиотеку.
          </p>
        </div>
      </div>

      <form className="content-card stack" onSubmit={handleSubmit}>
        <input name="title" placeholder="Название книги" required />
        <input name="author" placeholder="Автор" required />

        <button className="primary-button" type="submit">
          Сохранить книгу
        </button>
      </form>
    </section>
  );
}