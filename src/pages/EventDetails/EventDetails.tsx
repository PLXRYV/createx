import React from 'react';

import EventAbout from './components/EventAbout/EventAbout';
import EventMain from './components/EventMain/EventMain';
import EventSpeaker from './components/EventSpeaker/EventSpeaker';
import styles from './EventDetails.module.scss';

const EventDetails: React.FC = () => {
  return (
    <div>
      <EventMain />
      <EventAbout />
      <EventSpeaker />
    </div>
  );
};

export default EventDetails;
