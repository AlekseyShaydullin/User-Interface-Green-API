import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import style from './Chat.module.css';
import avatar from '../../images/standart-avatar.png';
import iconClose from '../../images/icons-close.svg'
import HeaderPanel from '../ui/HeaderPanel/HeaderPanel';
import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import iconSendMessage from '../../images/send-message.svg'
import Input from '../ui/Input/Input';
import { IChat } from '../../utils/type/type';
import MessageOwner from '../ui/MessageOwner/MessageOwner';
import MessageContact from '../ui/MessageContact/MessageContact';
import { sendMessageApi } from '../../service/api';
import { apiTokenInstance, idInstance } from '../../utils/constants';

const Chat: FC<IChat> = ({ onClick, data, phone }) => {
  const [message, setMessage] = useState('')

  console.log(data);

  
  const sendMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await sendMessageApi(idInstance, apiTokenInstance, phone, message)
        .then((data: any) => console.log(data))
      setMessage('')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <HeaderPanel avatar={avatar} icon={iconClose} onClick={onClick}  />
      <ul className={style.messages}>
        {data && data.map((incomingMessage) => {
          return (
            <span key={uuid4()}>
              {incomingMessage.type === 'incoming' ? (
                <MessageContact text={incomingMessage.textMessage} time={incomingMessage.timestamp} />
              ) : (
                <MessageOwner text={incomingMessage.textMessage} time={incomingMessage.timestamp} />
              )}
            </span>
          )
        })
        .reverse()}
      </ul>
      <form className={style.form} onSubmit={sendMessage}>
        <Input
          type={'text'}
          placeholder={'Введите сообщение'}
          destiny={'chat'}
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          required
        />
        <ButtonIcon icon={iconSendMessage} />
      </form>
    </>
  )
}

export default Chat;
