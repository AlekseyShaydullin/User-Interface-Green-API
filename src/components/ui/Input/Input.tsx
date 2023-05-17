import { FC } from 'react';
import style from './Input.module.css';
import { IInput } from '../../../utils/type/type';

//textarea

const Input: FC<IInput> = ({ destiny, ...rest }) => {
  return(
    <>
      {destiny !== 'chat' ? (
        <input className={style.input} {...rest} />
      ) : (
        <textarea className={style.textarea} {...rest}></textarea>
      )}
    </>
  )
}

export default Input;
