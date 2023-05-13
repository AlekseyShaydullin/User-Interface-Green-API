import React, { FC } from 'react';
import style from './Avatar.module.css';
import { IAvatar } from '../../../utils/type/type';

const Avatar: FC<IAvatar> = ({ avatar }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt='avatar' />
    </>
  )
}

export default Avatar;