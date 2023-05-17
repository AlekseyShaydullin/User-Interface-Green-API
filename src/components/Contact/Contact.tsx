import React, { FC } from 'react';
import style from './Contact.module.css';
import Avatar from '../ui/Avatar/Avatar';
import avatar from '../../images/standart-avatar.png';
import { IContact } from '../../utils/type/type';

const Contact: FC<IContact> = ({ title, date, message, phone }) => {
  const handle = () => {
    console.log('e')
  }

  const currentDay = new Date().getDate();
  const dayOfMessage = date.slice(8, 10);

  const checkDay = () => {
    if(Number(dayOfMessage) === currentDay) {
      return true
    }
    return false
  }

  console.log(phone);

  const userPhone = phone.slice(0, 11);

  console.log(userPhone);
  
  

  return (
    <li className={style.wrapper} onClick={handle}>
      <Avatar avatar={avatar} size={'contact'} />
      <div className={style.chat}>
        <div className={style.header}>
          <h2 className={style.title}>{title}</h2>
          <span className={style.date}>
            {checkDay() ? 'Сегодня' : 'Вчера'}
          </span>
        </div>
        <p className={style.message}>
          {message ? message : userPhone}
        </p>
      </div>
    </li>
  )
}

export default Contact;