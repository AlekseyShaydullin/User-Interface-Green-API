import React, { FC } from 'react';
import style from './ButtonForm.module.css';
import { IButton } from '../../../utils/type/type';

const ButtonForm: FC<IButton> = ({ text }) => {
  return (
    <>
      <button className={style.btn}>{text}</button>
    </>
  )
}

export default ButtonForm;
