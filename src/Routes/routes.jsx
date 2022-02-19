import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivitiesPage from '../client/ActivitiesPage';
import HomePage from '../client/HomePage';

const routes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route path='/activitytracker' element={<ActivitiesPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default routes;