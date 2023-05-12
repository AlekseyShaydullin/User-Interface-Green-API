import React, { FC } from 'react';
import { Route, Switch } from "react-router-dom";
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Header from '../Header/Header';

const App: FC = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route path="*" exact>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
