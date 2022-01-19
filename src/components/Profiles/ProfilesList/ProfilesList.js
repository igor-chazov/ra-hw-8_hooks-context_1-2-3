import React from 'react';
import useFetch from '../hooks/useFetch';
import PropTypes from 'prop-types';

function ProfilesList({ handleOnClick, selectedID, isLoading }) {
  const [{ data: list }] = useFetch({
    url: 'users.json',
    initialData: [],
    dataName: 'list',
  });

  const setListClasses = (item) => {
    const classes = [];
    if (item.id === selectedID) classes.push('profiles__selected');
    if (item.id === selectedID && isLoading.details) classes.push('profiles__loading', 'profiles__loading-details');

    return classes.join(' ');
  }

  return (
    <div className={'profiles__item'}>
      <ul className={'profiles__list'}>
        {isLoading.list ?
          <li
            className={'profiles__loading profiles__loading-list'}>
            <div className={'profiles__text'}>Loading...</div>
          </li>
          : null}
        {list.map((item) =>
          <li
            key={item.id}
            className={`${setListClasses(item)}`}
            onClick={() => handleOnClick(item)}>
            <button className={'profiles__text'}>{item.name}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

ProfilesList.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  selectedID: PropTypes.number,
  isLoading: PropTypes.object.isRequired,
};

export default ProfilesList;
