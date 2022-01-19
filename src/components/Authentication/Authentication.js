import React from 'react';
import './Authentication.css';
import AuthProvider from './AuthProvider/AuthProvider';
import NetoSocial from './NetoSocial/NetoSocial';

function Authentication() {
  return (
    <AuthProvider>
      <NetoSocial />
    </AuthProvider>
  );
}

export default Authentication;
