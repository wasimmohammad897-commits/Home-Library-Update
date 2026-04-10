import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../lib/mockApi';

export function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      register(
        String(form.get('name') ?? ''),
        String(form.get('email') ?? ''),
        String(form.get('password') ?? ''),
      );
      navigate('/libraries');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Не удалось создать аккаунт.');
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-badge">HOME LIBRARY</div>

        <h2 className="auth-title">Создать аккаунт</h2>

        <p className="auth-subtitle">
          Создайте личную библиотеку, добавляйте книги, делитесь коллекциями и
          управляйте чтением в одном удобном пространстве.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            <span>Имя</span>
            <input
              name="name"
              type="text"
              placeholder="Введите имя"
              required
            />
          </label>

          <label className="auth-label">
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
            />
          </label>

          <label className="auth-label">
            <span>Пароль</span>
            <input
              name="password"
              type="password"
              placeholder="Минимум 8 символов"
              minLength={8}
              required
            />
          </label>

          {error ? <p className="error-text">{error}</p> : null}

          <button className="primary-button" type="submit">
            Создать аккаунт
          </button>
        </form>

        <p className="muted-text">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </section>
    </main>
  );
}