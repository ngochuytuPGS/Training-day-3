import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPageClone = lazy(() => import('./modules/auth/LoginClone/pages/LoginPage'))
const SignUpPage = lazy(() => import('./modules/auth/SignUp/pages/SignUpPage'))


interface Props { }

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.signUp} component={SignUpPage} />
        <Route path={ROUTES.loginClone} component={LoginPageClone} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />
        <Route path='/' component={LoginPageClone} />
      </Switch>
    </Suspense>
  );
};
