import { FC } from 'react';
import style from './MessageOwner.module.css';
import { IMessage } from '../../../utils/type/type';
import { timeConverter } from '../../../utils/helpers';

const MessageOwner: FC<IMessage> = ({ text, time }) => {
  const timeOfMessage = timeConverter(time).slice(12, 17);

  return (
    <li className={style.wrapper}>
      <div className={style.messageOwner}>
        <span className={style.owner}>{text}</span>
        <div className={style.wrapperTime}>
          <span className={style.time}>{timeOfMessage}</span>
        </div>
        
      </div>
    </li>

  )
}

export default MessageOwner;