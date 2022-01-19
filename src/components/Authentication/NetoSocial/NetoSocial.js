import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Toolbar from '../Toolbar/Toolbar';
import Welcome from '../Welcome/Welcome';
import NewsList from '../NewsList/NewsList';

export default function NetoSocial() {
  const { token } = useContext(AuthContext);

  return (
    <div className="neto-social">
      <Toolbar />
      {!token && <Welcome />}
      {token && <NewsList />}
    </div>
  );
}
