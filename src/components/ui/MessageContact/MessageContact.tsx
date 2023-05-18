import { FC } from 'react';
import style from './MessageContact.module.css';
import { IMessage } from '../../../utils/type/type';
import { timeConverter } from '../../../utils/helpers';

const MessageContact: FC<IMessage> = ({ text, time }) => {
  const timeOfMessage = timeConverter(time).slice(12, 17);
  
  return (
    <li className={style.wrapper}>
      <div className={style.messageContact}>
        <span className={style.contact}>{text}</span>
        <div className={style.wrapperTime}>
          <span className={style.time}>{timeOfMessage}</span>
        </div>
        
      </div>
    </li>

  )
}

export default MessageContact;