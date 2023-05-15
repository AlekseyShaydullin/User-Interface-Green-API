import React, { FC } from 'react';
import style from './MainPage.module.css';
import avatar from '../../images/standart-avatar.png';
import iconMessage from '../../images/icons-message.svg';
// import Preview from '../../components/Preview/Preview';
import Header from '../../components/Header/Header';
import Contact from '../../components/Contact/Contact';
import Chat from '../../components/Chat/Chat';
import HeaderPanel from '../../components/ui/HeaderPanel/HeaderPanel';

const MainPage: FC = () => {


  
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.panel}>
          <HeaderPanel avatar={avatar} icon={iconMessage} />
          <ul className={style.chats}>
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
            <Contact title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
            <Contact title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          </ul>
        </section>
        <section className={style.correspondence}>
          {/* <Preview /> */}
          <Chat />
        </section>
      </main>
    </>
  );
}

export default MainPage;
