import React, { FC } from 'react';
import style from './ErrorPage.module.css';

const ErrorPage: FC = () => {
  
  return (
    <main className={style.wrapper}>
      <h1>Что-то пошло не так</h1>
    </main>
  );
}

export default ErrorPage;