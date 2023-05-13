import React, { FC } from 'react';
import style from './Input.module.css';
import { IInput } from '../../../utils/type/type';

const Input: FC<IInput> = ({ type, placeholder }) => {
  return(
    <>
      <input className={style.input} 
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input;
