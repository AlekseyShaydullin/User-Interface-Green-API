import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import Button from '../Button/Button';
import logo from '../../images/WhatsApp-Logo.wine.svg'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <NavLink className={style.wrapper} to={{pathname: '/'}} exact>
        <img src={logo} className={style.img} alt='logo' />
        <h1 className={style.title}>GREEN API</h1>
      </NavLink>
      <Button text={'Выйти'} />
    </header>
  )
}

export default Header;