import './assets/style/style.scss';

import CourseDetails from '@pages/CourseDetails/CourseDetails';
import Courses from '@pages/Courses/Courses';
import EventsPage from '@pages/EventsList/EventsList';
import HomePage from '@pages/Home/HomePage';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
