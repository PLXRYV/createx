import React from 'react';

import EventAbout from './components/EventAbout/EventAbout';
import EventMain from './components/EventMain/EventMain';
import styles from './EventDetails.module.scss';

const EventDetails: React.FC = () => {
  return (
    <div className={styles.eventDetailsPage}>
      <EventMain />
      <EventAbout />
    </div>
  );
};

export default EventDetails;
