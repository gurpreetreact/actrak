import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import './ActivityBar.scss';

const ActivityBar = ({ data }) => {
  console.log('props', data);
  const additionalWidth = 50;
  return (
    <Fragment>
      <div>{data.progressBarName}</div>
      <div className='ProgressBarContainer'>
        <div className='checkpointsContainer'>
          {data.progressBar.map((datum) => (
            <Fragment key={datum.progressBarPartitionKey}>
              <div
                className='checkpoint'
                style={{
                  width: `${datum.progressPercent - 0.5}%`,
                  borderWidth: '0px',
                  borderStyle: 'solid',
                }}
              >
                |
              </div>
            </Fragment>
          ))}
        </div>
        <div className='ProgressBar' style={{ width: `${additionalWidth}%` }}>
          
        </div>
      </div>
    </Fragment>
  );
};

ActivityBar.propTypes = {
  data: propTypes.object,
};

export default ActivityBar;
