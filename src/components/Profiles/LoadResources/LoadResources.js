import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function LoadResources({ setIsSrcLoaded }) {
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    setIsSrcLoaded(true);
    setIsMount(false);
  }, [setIsSrcLoaded]);

  if (isMount) return (
    <>
      <div className={'profiles__loading profiles__loading-list _visually-hidden'}></div>
      <div className={'profiles__loading profiles__loading-details _visually-hidden'}></div>
    </>
  )

  return null;
}

LoadResources.propTypes = {
  setIsSrcLoaded: PropTypes.func.isRequired,
}

export default LoadResources
