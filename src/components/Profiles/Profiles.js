import React, { useState } from 'react';
import ProfilesContext from './ProfilesContext/ProfilesContext';
import LoadResources from './LoadResources/LoadResources';
import ProfilesList from './ProfilesList/ProfilesList';
import ProfilesDetails from './ProfilesDetails/ProfilesDetails';
import './profiles.css';

export default function Profiles() {
  const [selectedID, setSelectedID] = useState(null);
  const [isLoading, setIsLoading] = useState({
    list: false,
    details: false,
  });

  const [isSrcLoaded, setIsSrcLoaded] = useState(false);

  const handleOnClick = (item) => {
    setSelectedID(item.id);
  }

  return (
    <ProfilesContext.Provider value={{ setIsLoading }}>
      <div className={'profiles'}>
        {isSrcLoaded ? null : <LoadResources setIsSrcLoaded={setIsSrcLoaded} />}
        <div className={'profiles__column-1'}>
          <ProfilesList handleOnClick={handleOnClick} selectedID={selectedID} isLoading={isLoading} />
        </div>

        <div className={'profiles__column-2'}>
          {selectedID !== null ? <ProfilesDetails selectedID={selectedID} /> : null}
        </div>
      </div>
    </ProfilesContext.Provider>
  )
}
