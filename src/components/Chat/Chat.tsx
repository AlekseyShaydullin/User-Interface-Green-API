import React, { FC } from 'react';
import style from './Chat.module.css';
import avatar from '../../images/standart-avatar.png';
import iconClose from '../../images/icons-close.svg'
import HeaderPanel from '../ui/HeaderPanel/HeaderPanel';
import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import iconSendMessage from '../../images/send-message.svg'
import Input from '../ui/Input/Input';

const Chat: FC = () => {
  return (
    <>
      <HeaderPanel avatar={avatar} icon={iconClose}  />
      <div className={style.messages}>
        <span>привет</span>
      </div>
      <form className={style.form}>
        <Input type={'text'} placeholder={''} />
        <ButtonIcon icon={iconSendMessage} />
      </form>
    </>
  )
}

export default Chat;