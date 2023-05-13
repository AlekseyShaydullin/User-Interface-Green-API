import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import Button from '../ui/Button/Button';
import logo from '../../images/WhatsApp-Logo.wine.svg'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <NavLink className={style.logo} to={{pathname: '/'}} exact>
          <img src={logo} className={style.img} alt='logo' />
          <h1 className={style.title}>GREEN API</h1>
        </NavLink>
        <Button text={'Выйти'} />
      </div>
    </header>
  )
}

export default Header;