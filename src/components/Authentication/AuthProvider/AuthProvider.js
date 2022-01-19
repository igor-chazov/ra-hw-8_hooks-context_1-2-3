import React from 'react';
import AuthContext from '../contexts/AuthContext';
import useStorage from '../hooks/useStorage';
import links from '../utility/links';

export default function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);

  const handleLogin = async ({ login, password }) => {
    try {
      const responseToken = await fetch(`${links}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });
      if (!responseToken.ok) {
        throw new Error('Ошибка аутентификации');
      }
      const { token } = await responseToken.json();

      const responseProfile = await fetch(`${links}/private/me`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!responseProfile.ok) {
        throw new Error('Профиль не существует');
      }
      const profile = await responseProfile.json();

      setToken(token);
      setProfile(profile);
    } catch (e) {
      setToken(null);
      setProfile(null);
    }
  }

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, token, profile }}>
      {props.children}
    </AuthContext.Provider>
  )
}
