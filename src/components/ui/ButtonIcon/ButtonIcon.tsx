import React, { FC } from 'react';
import style from './ButtonIcon.module.css';
import { IButtonIcon } from '../../../utils/type/type';

const ButtonIcon: FC<IButtonIcon> = ({ icon }) => {
  return (
    <button className={style.btn}>
      <img className={style.img} src={icon} alt='icon' />
    </button>
  )
}

export default ButtonIcon;