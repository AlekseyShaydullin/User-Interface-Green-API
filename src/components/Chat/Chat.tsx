import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
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

const Chat: FC<IChat> = ({ onClick, date, incomingMessage, phone }) => {
  const [message, setMessage] = useState('')

  const timeOfMessage = date.slice(11, 16);

  console.log(timeOfMessage);

  console.log(phone);

  console.log(message);

  // const a: Array<string> = [];
  
  const sendMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    let idInstance = localStorage.getItem('idInstance');
    let apiTokenInstance = localStorage.getItem('apiTokenInstance');
    try {
      await sendMessageApi(idInstance, apiTokenInstance, phone, message)
        .then((data: any) => console.log(data))
      // a.push(message)
      setMessage('')
    } catch(error) {
      console.log(error)
    }
  }

  // console.log(a);
  

  return (
    <>
      <HeaderPanel avatar={avatar} icon={iconClose} onClick={onClick}  />
      <ul className={style.messages}>
        <MessageOwner text={'привет'} time={timeOfMessage} />
        <MessageContact text={'привет, как твои дела? У меня все хорошо. Вот еду к подруге. Только села в такси'} time={timeOfMessage} />
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
