import React, { FC } from 'react';
import style from './Avatar.module.css';
import { IAvatar } from '../../../utils/type/type';

const Avatar: FC<IAvatar> = ({ avatar, size }) => {
  return (
    <>
      {size === 'owner' ? (
        <img className={style.default} src={avatar} alt='avatar' />
        ) : (
        <img className={style.user} src={avatar} alt='avatar' />
      )}
    </>
  )
}

export default Avatar;