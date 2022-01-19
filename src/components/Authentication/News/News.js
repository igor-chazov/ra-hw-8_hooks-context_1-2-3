import React from 'react';
import PropTypes from 'prop-types';

export default function News({ data }) {
  return (
    <div className="news">
      <div className="news__image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="news__title">
        {data.title}
      </div>
      <div className="news__content">
        {data.content}
      </div>
    </div>
  );
}

News.propTypes = {
  data: PropTypes.object.isRequired,
}
