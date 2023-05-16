import React, { FC } from 'react';
import style from './HeaderPanel.module.css';
import Avatar from '../Avatar/Avatar';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import { IHeaderPanel } from '../../../utils/type/type';

const HeaderPanel: FC<IHeaderPanel> = ({ avatar, icon, onClick }) => {


  return (
    <div className={style.menu}>
      <Avatar avatar={avatar} size={'owner'} />
      <ButtonIcon icon={icon} onClick={onClick}/>
    </div>
  )
}

export default HeaderPanel;