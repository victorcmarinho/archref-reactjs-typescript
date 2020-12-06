import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '@hooks/auth';

import { IRouteProps } from './interfaces';

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { user } = useAuth();
  const user = { name: 'Vinnicius Gomes' }; // Remove this line

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
