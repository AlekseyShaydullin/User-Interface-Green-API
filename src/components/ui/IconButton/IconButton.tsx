import React, { FC } from 'react';
import style from './IconButton.module.css';
import { IIconButton } from '../../../utils/type/type';

const IconButton: FC<IIconButton> = ({ icon }) => {
  return (
    <button className={style.btn}>
      <img className={style.img} src={icon} alt='icon' />
    </button>
  )
}

export default IconButton;