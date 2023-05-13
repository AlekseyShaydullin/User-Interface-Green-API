import React, { FC } from 'react';
import style from './LoginPage.module.css';
import Label from '../../components/ui/Label/Label';
import Input from '../../components/ui/Input/Input';
import ButtonForm from '../../components/ui/ButtonForm/ButtonForm';

const LoginPage: FC = () => {
  return (
    <>
      <main className={style.main}>
        <section className={style.wrapper}>
          <h2 className={style.title}>Вход</h2>
          <form className={style.form}>
            <Label text={'Login'} />
            <Input type='text' placeholder='Введите idInstance' required />
            <Label text={'Password'} />
            <Input type='password' placeholder='Введите apiTokenInstance' required />
            <ButtonForm text={'Войти'} />
          </form>
        </section>
      </main>
    </>
  )
}

export default LoginPage