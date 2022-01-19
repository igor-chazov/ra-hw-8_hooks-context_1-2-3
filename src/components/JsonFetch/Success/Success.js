import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import links from '../utility/links';

export default function Success() {
  const [{ data }] = useJsonFetch(`${links}/data`);

  return (
    <div className={'success'}>
      <div className={'jsonfetch__title'}>Данные успешно получены</div>
      <div className={'jsonfetch__text'}>Data: {data !== null ? data.status : ''}</div>
    </div>
  )
}
