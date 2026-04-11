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

          <div className="login-form">
            <div className="google-connect-box">
              <div className="google-connect-icon">G</div>

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
          </div>

          <p className="register-text">
            <Link to="/login">Вернуться ко входу</Link>
          </p>
        </div>
      </section>
    </main>
  );
}