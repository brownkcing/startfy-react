import React from 'react';
import { Route, Redirect  } from 'react-router-dom';
import AuthService from './auth.service';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userLogged = AuthService.getCurrentUser();

  return (
    <Route {...rest} render={
      props => {
        if (userLogged !==null) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/unauthorized',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;