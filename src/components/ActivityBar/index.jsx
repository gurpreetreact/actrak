import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import './ActivityBar.scss';

const ActivityBar = ({ data }) => {
  const { AllActivities } = data;
  console.log('props', data);
  const additionalWidth = 50;
  return (
    <Fragment>
      {AllActivities.map(activity => 
      {
        console.log(activity);
        return (
          <Fragment key={activity.progressBarId}> 
            <div>{activity.progressBarName}</div>
            <div className='ab__ProgressBarContainer'>
              <div className='ab__checkpointsContainer'>
          
                {activity.progressBar.map((datum) => (
                  <Fragment key={datum.progressBarPartitionKey}>
                    <div
                      id={datum.progressBarPartitionKey}
                      className='ab__checkpoint'
                      title={datum.progressHeading}
                      style={{
                        width: `${datum.progressPercent - 0.5}%`,
                        borderWidth: '0px',
                        borderStyle: 'solid',
                      }}
                    >
                |
                    </div>
                    <label className='ab__checkpointLabel' htmlFor={datum.progressBarPartitionKey}>{datum.progressHeading}</label>
                  </Fragment>
                ))}
              </div>
              <div className='ab__ProgressBar' style={{ width: `${additionalWidth}%` }}>
          
              </div>
            </div>
          </Fragment>
        );})}
    </Fragment>
  );
};

ActivityBar.propTypes = {
  data: propTypes.object,
};

export default ActivityBar;
