import '@assets/style/style.scss';

import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import Subscribe from '@components/common/Subscribe/Subscribe';
import React from 'react';

import EventsRoad from './EventsRoad';

const EventsList: React.FC = () => {
  return (
    <div>
      <Header />
      <EventsRoad />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default EventsList;
