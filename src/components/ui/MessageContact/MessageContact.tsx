import { FC } from 'react';
import style from './MessageContact.module.css';
import { IMessage } from '../../../utils/type/type';

const MessageContact: FC<IMessage> = ({ text, time }) => {
  return (
    <li className={style.wrapper}>
      <div className={style.messageContact}>
        <span className={style.contact}>{text}</span>
        <div className={style.wrapperTime}>
          <span className={style.time}>{time}</span>
        </div>
        
      </div>
    </li>

  )
}

export default MessageContact;