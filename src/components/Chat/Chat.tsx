import { FC } from 'react';
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

const Chat: FC<IChat> = ({ onClick, date, message }) => {
  const timeOfMessage = date.slice(11, 16);

  console.log(timeOfMessage);
  

  const sendMessage = () => (
    console.log('Я отправляю сообщение')
  )

  return (
    <>
      <HeaderPanel avatar={avatar} icon={iconClose} onClick={onClick}  />
      <ul className={style.messages}>
        <MessageOwner text={'привет'} time={timeOfMessage} />
        <MessageContact text={'привет, как твои дела? У меня все хорошо. Вот еду к подруге. Только села в такси'} time={timeOfMessage} />
      </ul>
      <form className={style.form}>
        <Input type={'text'} placeholder={'Введите сообщение'} destiny={'chat'} />
        <ButtonIcon icon={iconSendMessage} onClick={sendMessage} />
      </form>
    </>
  )
}

export default Chat;