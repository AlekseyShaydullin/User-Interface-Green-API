import React, { FC } from 'react';
import style from './MainPage.module.css';
import avatar from '../../images/standart-avatar.png';
import icon from '../../images/icons-message.svg'
import IconButton from '../../components/ui/IconButton/IconButton';
import Avatar from '../../components/ui/Avatar/Avatar';

const MainPage: FC = () => {
  
  return (
    <main className={style.wrapper}>
      <div className={style.panel}>
        <div className={style.menu}>
          <Avatar avatar={avatar} />
          <IconButton icon={icon} />
        </div>
        <div className={style.chats}></div>
      </div>
      <div className={style.correspondence}></div>
    </main>
  );
}

export default MainPage;
