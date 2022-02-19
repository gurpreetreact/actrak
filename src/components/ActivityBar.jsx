import React from 'react';
import propTypes from 'prop-types';

const ActivityBar = ({ data }) => {
  console.log('props', data);
  return (
    <div>ActivityBar</div>
  );
};

ActivityBar.propTypes = {
  data: propTypes.object,
};

export default ActivityBar;