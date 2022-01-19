import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import PropTypes from 'prop-types';

function ProfilesDetails({ selectedID }) {
  const [{ data, fetchController }] = useFetch({
    url: `${selectedID}.json`,
    initialData: null,
    dataName: 'details',
  });

  useEffect(() => {
    return () => fetchController.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);

  if (data === null) return null;

  return (
    <div className={'profiles__details details-profiles'}>
      <ul className={'profiles__list'}>
        <li>
          <div className={'profiles__img'}>
            <img src={data.avatar} alt={'user'} />
          </div>
        </li>
        <li><div className={'profiles__text propfiles__name'}>{data.name}</div></li>
        <li><div className={'profiles__text'}>City: {data.details.city}</div></li>
        <li><div className={'profiles__text'}>Company: {data.details.company}</div></li>
        <li><div className={'profiles__text'}>Position: {data.details.position}</div></li>
      </ul>
    </div>
  )
}

ProfilesDetails.propTypes = {
  selectedID: PropTypes.number,
}

export default ProfilesDetails;
