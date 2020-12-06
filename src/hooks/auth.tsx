/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '@services/api';

interface IUser {
  avatar: string;
  id: string;
  email: string;
  name: string;
  type: number;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@ApplicationName:token');
    const user = localStorage.getItem('@ApplicationName:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', {
      login,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@ApplicationName:token', token);
    localStorage.setItem('@ApplicationName:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ApplicationName:token');
    localStorage.removeItem('@ApplicationName:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
