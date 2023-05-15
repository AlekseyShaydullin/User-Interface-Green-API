import React, { FC } from 'react';
import style from './Chat.module.css';
import Avatar from '../ui/Avatar/Avatar';
import IconButton from '../../components/ui/ButtonIcon/ButtonIcon';
import avatar from '../../images/standart-avatar.png';
import iconClose from '../../images/icons-close.svg'
import HeaderPanel from '../ui/HeaderPanel/HeaderPanel';

const Chat: FC = () => {
  return (
    <>
      <HeaderPanel avatar={avatar} icon={iconClose}  />
    </>
  )
}

export default Chat;