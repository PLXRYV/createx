import '@assets/style/style.scss';

import { useScrollToTop } from '@hooks/useScrollToTop';
import CourseDetails from '@pages/CourseDetails/CourseDetails';
import Courses from '@pages/Courses/Courses';
import EventDetails from '@pages/EventDetails/EventDetails';
import EventsPage from '@pages/EventsList/EventsList';
import HomePage from '@pages/Home/HomePage';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
