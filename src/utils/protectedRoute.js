import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ Component, user, ...rest }) => {
  const auth = useSelector(({ auth }) => auth);
  return (
    <Route {...rest} render={
      props => {
        if (auth?.userData?.Data?.access_token) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/',
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
