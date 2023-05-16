import React, { FC } from 'react';
import { Route, Switch } from "react-router-dom";
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

const App: FC = () => {

  return (
    <>
      <Switch>
        <ProtectedRoute path='/' onlyForAuth exact>
          <MainPage />
        </ProtectedRoute>
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
