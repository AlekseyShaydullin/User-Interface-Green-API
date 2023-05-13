import React, { FC } from 'react';
import style from './MainPage.module.css';
import avatar from '../../images/standart-avatar.png';
import iconMessage from '../../images/icons-message.svg'
import IconButton from '../../components/ui/IconButton/IconButton';
import Avatar from '../../components/ui/Avatar/Avatar';
import Chat from '../../components/ui/Chat/Chat';

const MainPage: FC = () => {
  
  return (
    <main className={style.main}>
      <section className={style.panel}>
        <div className={style.menu}>
          <Avatar avatar={avatar} size={'owner'} />
          <IconButton icon={iconMessage} />
        </div>
        <ul className={style.chats}>
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
          <Chat title={'Петя'} date={'Вчера'} message={'Привет. Как дела?'} />
          <Chat title={'Рыська'} date={'Сегодня'} message={'Доброе утро, любимая'} />
        </ul>
      </section>
      <section className={style.correspondence}></section>
    </main>
  );
}

export default MainPage;
