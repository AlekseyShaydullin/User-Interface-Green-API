import { FC } from 'react';
import style from './MessageOwner.module.css';
import { IMessage } from '../../../utils/type/type';

const MessageOwner: FC<IMessage> = ({ text, time }) => {
  return (
    <li className={style.wrapper}>
      <div className={style.messageOwner}>
        <span className={style.owner}>{text}</span>
        <div className={style.wrapperTime}>
          <span className={style.time}>{time}</span>
        </div>
        
      </div>
    </li>

  )
}

export default MessageOwner;