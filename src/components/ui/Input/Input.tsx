import React, { FC } from 'react';
import style from './Input.module.css';
import { IInput } from '../../../utils/type/type';

const Input: FC<IInput> = ({ ...rest }) => {
  return(
    <>
      <input className={style.input} 
        {...rest}
      />
    </>
  )
}

export default Input;
