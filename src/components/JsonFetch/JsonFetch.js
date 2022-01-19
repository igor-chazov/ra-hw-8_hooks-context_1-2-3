import React from 'react';
import './jsonfetch.css';
import Error from './Error/Error';
import Loading from './Loading/Loading';
import Success from './Success/Success';

export default function JsonFetch() {
  return (
    <div className={'jsonfetch'}>
      <Success />
      <Error />
      <Loading />
    </div>
  )
}
