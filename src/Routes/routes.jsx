import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../client/home';
import { ActivitiesManager } from '../client/activityTracker';

const routes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route path='/activitytracker' element={<ActivitiesManager />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default routes;