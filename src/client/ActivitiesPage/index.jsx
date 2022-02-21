import React, { Fragment } from 'react';
import './ActivitiesPage.scss';
import ActivityBar from '../../components/ActivityBar';
import userInfo from '../../data/userTable.json';

const ActivitiesPage = () => {
  return (
    <Fragment>
      <div className='ap__container'>
        <div className="ap__pageContainer">
          <div className="ap__leftHalfContainer"></div>
          <div className="ap__RightHalfContainer">
            <ActivityBar data={userInfo} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActivitiesPage;
