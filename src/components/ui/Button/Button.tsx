import React, { FC } from 'react';
import style from './Button.module.css';
import { IButton } from '../../../utils/type/type';

const Button: FC<IButton> = ({ text, ...rest }) => {
  return (
    <>
      <button className={style.btn} { ...rest }>{ text }</button>
    </>
  )
}

export default Button;