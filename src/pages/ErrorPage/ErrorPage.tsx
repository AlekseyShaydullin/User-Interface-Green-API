import React, { FC } from 'react';
import style from './ErrorPage.module.css';
import ButtonForm from '../../components/ui/ButtonForm/ButtonForm';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  
  return (
    <main className={style.main}>
      <h1 className={style.title}>404</h1>
      <p className={style.subtitle}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
        существует. Возможно она устарела, была удалена, или был введен неверный
        адрес в адресной строке
      </p>
      <Link className={style.link} to='/'>
        <ButtonForm text={'Перейти на главную'} />
      </Link>
      
    </main>
  );
}

export default ErrorPage;