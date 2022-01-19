import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import links from '../utility/links';

export default function Error() {
  const [{ error }] = useJsonFetch(`${links}/error`);

  return (
    <div className={'error'}>
      <div className={'jsonfetch__title'}>Получение ошибки 500</div>
      <div className={'jsonfetch__text jsonfetch__error'}>Error: {error !== null ? error : ''}</div>
    </div>
  )
}
