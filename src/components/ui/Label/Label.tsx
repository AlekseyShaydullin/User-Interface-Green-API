import React, { FC } from 'react';
import style from './Label.module.css';
import { ILabel } from '../../../utils/type/type';

const Label: FC<ILabel> = ({ text }) => {
  return (
    <>
      <label className={style.label}>{text}</label>
    </>
  )
}

export default Label;