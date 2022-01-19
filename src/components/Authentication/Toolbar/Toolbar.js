import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import ToolbarForm from '../ToolbarForm/ToolbarForm';
import ToolbarProfile from '../ToolbarProfile/ToolbarProfile';

export default function Toolbar() {
  const { profile } = useContext(AuthContext);

  return (
    <div className="toolbar">
      <div className="toolbar__logo">Neto Social</div>
      {!profile && <ToolbarForm />}
      {profile && <ToolbarProfile />}
    </div>
  );
}
