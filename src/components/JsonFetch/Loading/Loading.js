import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import links from '../utility/links';

export default function Loading() {
  const [{ loading }] = useJsonFetch(`${links}/loading`);

  return (
    <div className={'loading'}>
      <div className={'jsonfetch__title'}>Индикатор загрузки (5 сек)</div>
      {loading ?
        <div className={'jsonfetch__loading'}>Загрузка...</div>
        : null
      }
    </div>
  )
}
