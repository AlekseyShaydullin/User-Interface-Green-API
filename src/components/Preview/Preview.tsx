import React, { FC } from 'react';
import style from './Preview.module.css';

const Preview: FC = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>WhatsApp API</h2>
      <p className={style.subtitle}>Отправляйте и получайте сообщения, картинки и видео </p>
      <p className={style.subtitle}>через стабильный шлюз 
        <span className={style.span}> WhatsApp API</span>
      </p>
      <p className={style.subtitle}>
        <span className={style.span}>Бесплатный </span>
        инструмент для разработчиков
      </p>
      <p className={style.subtitle}>
        <span className={style.span}>Зелёный </span>
        свет Вашим Идеям!
      </p>
    </div>
  )
}

export default Preview;