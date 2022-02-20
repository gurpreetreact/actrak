import React, { Fragment } from 'react';
import ActivityBar from '../components/ActivityBar';
import progressBars from '../data/activitydata.json';

const ActivitiesPage = () => {
  
  return (
    <Fragment>
      {progressBars.map(singleBar => (
        <ActivityBar key={singleBar.progressBarId} data={singleBar} />
      ))}
    </Fragment>
  );
};

export default ActivitiesPage;
