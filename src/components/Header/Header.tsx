import React, { FC } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import style from './Header.module.css';
import Button from '../ui/Button/Button';
import logo from '../../images/WhatsApp-Logo.wine.svg'
import { setCookie } from '../../utils/cookie';

const Header: FC = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('idInstance');
    localStorage.removeItem('apiTokenInstance');
    setCookie('accessToken', '');
    history.replace({ pathname: "/login" });
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <NavLink className={style.logo} to={{pathname: '/'}} exact>
          <img src={logo} className={style.img} alt='logo' />
          <h1 className={style.title}>GREEN API</h1>
        </NavLink>
        <Button text={'Выйти'} onClick={logout} />
      </div>
    </header>
  )
}

export default Header;