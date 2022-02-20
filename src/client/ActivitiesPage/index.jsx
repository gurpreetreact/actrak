import React, { Fragment } from 'react';
import './ActivitiesPage.scss';
import ActivityBar from '../../components/ActivityBar';
import progressBars from '../../data/activitydata.json';

const ActivitiesPage = () => {
  
  return (
    <Fragment>
      <div className='pageContainer'>
        <div className='leftHalfContainer'>

        </div>
        <div className='RightHalfContainer'>
          {progressBars.map(singleBar => (
            <ActivityBar key={singleBar.progressBarId} data={singleBar} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ActivitiesPage;
