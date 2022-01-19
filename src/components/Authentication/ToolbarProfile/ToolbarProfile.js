import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function ToolbarProfile() {
  const { profile, handleLogout } = useContext(AuthContext);

  return (
    <div className="toolbar__profile">
      <div className="toolbar__profile-name">
        Добро пожаловать, {profile.name}
      </div>
      <div className="toolbar__profile-avatar">
        <img src={profile.avatar} alt={profile.name} />
      </div>
      <div className="toolbar__profile-logout">
        <button className="toolbar__profile-button" onClick={handleLogout}>Выйти</button>
      </div>
    </div>
  );
}
