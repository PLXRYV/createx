import Footer from '@components/common/Footer/Footer';
import React from 'react';

import EventAbout from './components/EventAbout/EventAbout';
import EventBenefits from './components/EventBenefits/EventBenefits';
import EventMain from './components/EventMain/EventMain';
import EventMore from './components/EventMore/EventMore';
import EventNewsletter from './components/EventNewsletter/EventNewsletter';
import EventRequest from './components/EventRequest/EventRequest';
import EventSpeaker from './components/EventSpeaker/EventSpeaker';
import styles from './EventDetails.module.scss';

const EventDetails: React.FC = () => {
  return (
    <div>
      <EventMain />
      <EventAbout />
      <EventSpeaker />
      <EventBenefits />
      <EventNewsletter />
      <EventRequest />
      <EventMore />
      <Footer />
    </div>
  );
};

export default EventDetails;
