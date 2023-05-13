import React, { FC } from 'react';
import style from './Chat.module.css';
import Avatar from '../Avatar/Avatar';
import avatar from '../../../images/standart-avatar.png';
import { IChat } from '../../../utils/type/type';

const Chat: FC<IChat> = ({ title, date, message }) => {
  return (
    <li className={style.wrapper}>
      <Avatar avatar={avatar} size={'contact'} />
      <div className={style.chat}>
        <div className={style.header}>
          <h2 className={style.title}>{title}</h2>
          <span className={style.date}>{date}</span>
        </div>
        <p className={style.message}>{message}</p>
      </div>
    </li>
  )
}

export default Chat;