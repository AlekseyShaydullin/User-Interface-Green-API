import { FC } from 'react';
import style from './Contact.module.css';
import Avatar from '../ui/Avatar/Avatar';
import avatar from '../../images/standart-avatar.png';
import { IContact } from '../../utils/type/type';

const Contact: FC<IContact> = ({ title, date, message, phone, open }) => {
  const currentDay = new Date().getDate();
  const dayOfMessage = date.slice(8, 10);
  const userPhone = phone.slice(0, 11);

  const checkDay = () => {
    if(Number(dayOfMessage) === currentDay) {
      return true
    }
    return false
  }

  return (
    <li className={style.wrapper} onClick={open}>
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