import React, { FC } from 'react';
import style from './Contact.module.css';
import Avatar from '../ui/Avatar/Avatar';
import avatar from '../../images/standart-avatar.png';
import { IContact } from '../../utils/type/type';

const Contact: FC<IContact> = ({ title, date, message }) => {
  const handle = () => {
    console.log('e')
  }

  return (
    <li className={style.wrapper} onClick={handle}>
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

export default Contact;