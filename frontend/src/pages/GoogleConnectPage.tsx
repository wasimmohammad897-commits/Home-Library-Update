import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../lib/mockApi';

export function GoogleConnectPage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  function handleConnectGoogle() {
    try {
      setIsConnecting(true);
      setError('');

      login('anna@example.com', 'password123');

      navigate('/libraries');
    } catch (submitError) {
      setIsConnecting(false);
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Не удалось подключить вход через Google.'
      );
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-card__inner">
          <h1 className="login-title">Подключение Google</h1>

          <p className="login-subtitle">
            Подключите аккаунт Google, чтобы войти в систему и открыть доступ к домашней библиотеке
          </p>

          <div className="google-connect-box">
            <div className="google-connect-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.4c-.2 1.3-1.5 3.9-5.4 3.9-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3.1.8 3.8 1.4l2.6-2.5C16.7 3.3 14.5 2.4 12 2.4 6.9 2.4 2.8 6.5 2.8 11.6S6.9 20.8 12 20.8c6.1 0 8.9-4.3 8.9-8.6 0-.6-.1-1.1-.2-1.6H12Z"
                />
                <path
                  fill="#34A853"
                  d="M3.8 7.7l3.2 2.3c.9-2 2.8-3.4 5-3.4 1.8 0 3.1.8 3.8 1.4l2.6-2.5C16.7 3.3 14.5 2.4 12 2.4c-3.5 0-6.5 2-8.2 5.3Z"
                />
                <path
                  fill="#4A90E2"
                  d="M12 20.8c2.4 0 4.5-.8 6.1-2.3l-2.8-2.2c-.8.6-1.8 1-3.3 1-3.8 0-5.2-2.5-5.4-3.8l-3.1 2.4c1.6 3.1 4.8 4.9 8.5 4.9Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.6 13.5c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7L3.5 7.7c-.6 1.2-.9 2.5-.9 4.1s.3 2.9.9 4.1l3.1-2.4Z"
                />
              </svg>
            </div>

            <h2 className="google-connect-title">Войти через Google</h2>

            <p className="google-connect-text">
              Для демонстрации будет использован тестовый аккаунт Google.
            </p>

            <button
              type="button"
              className="login-submit"
              onClick={handleConnectGoogle}
              disabled={isConnecting}
            >
              {isConnecting ? 'Подключение...' : 'Подключить Google'}
            </button>
          </div>

          {error ? <p className="error-message">{error}</p> : null}

          <p className="register-text">
            <Link to="/login">Вернуться ко входу</Link>
          </p>
        </div>
      </section>
    </main>
  );
}