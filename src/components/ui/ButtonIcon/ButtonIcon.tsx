import React, { FC } from 'react';
import style from './ButtonIcon.module.css';
import { IButtonIcon } from '../../../utils/type/type';

const ButtonIcon: FC<IButtonIcon> = ({ icon, onClick, modal }) => {

  return (
    <>
      {modal ? (
        <button className={style.closeIcon} onClick={onClick}>
          <img className={style.img} src={icon} alt='icon' />
        </button>
      ) : (
        <button className={style.btn} onClick={onClick}>
          <img className={style.img} src={icon} alt='icon' />
        </button>
      )}
    </>
  )
}

export default ButtonIcon;