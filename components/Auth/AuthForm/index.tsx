import React, { ChangeEvent, ReactNode } from 'react';
import AuthError from '../AuthError';
import styles from './AuthForm.module.scss';

interface AuthFormProps {
  error?: string
  title: string
  children: ReactNode,
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
}

function AuthForm({ title, children, onSubmit, error = '' }: AuthFormProps): React.ReactElement {

  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </header>

        <div className={styles.form}>
          {children}

          {
            /* 
              Компонент с приёмом ошибки появлятеся здесь,
              поскольку он испольуется в других компонентах, таких как login и register.
              Таким образом перенеся его сюда - мы сокращяет написание лишнего кода 
            */
          }
          {error.length > 0 && (
            <AuthError apperance="form">
              {error}
            </AuthError>
          )}
        </div>
      </div>
    </form>
  );
}

export default AuthForm;