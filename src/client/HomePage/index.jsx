import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import AddActivity from '../AddActivity';
import './HomePage.scss';
import skull from '../../assets/images/logo512.png';
import backgroundImage from '../../assets/images/background.jpg';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className='hp__container' style={{backgroundImage: `url(${backgroundImage})` }}>
        <div className='hp__headerContainer'>
          <div className='hp__header'>
            <div className='hp__headerLogoContainer'>
              <img src={skull} className='hp__logo' />
            </div>
            <div className='hp__headerTitle'>ACTRAK</div>
          </div>
        </div>
        <div>Welcome to this Activity Tracker</div>
        <div>You can click below to go to activity tracking page</div>
        <div className='hp__buttonContainer'>
          <button
            className='hp__button'
            onClick={() => navigate('/activitytracker')}
          >
            {' '}
            Track the activity page
          </button>
        </div>
        <AddActivity />
      </div>
    </Fragment>
  );
};

export default HomePage;
