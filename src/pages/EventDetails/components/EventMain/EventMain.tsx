import Header from '@components/common/Header/Header';
import styles from '@pages/EventDetails/components/EventMain/EventMain.module.scss';
import { EVENTS_DATA } from '@pages/EventsList/EventsRoad';
import React from 'react';
import { useParams } from 'react-router-dom';

const EventMain: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const event = EVENTS_DATA.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <section className={styles.eventMain}>
        <Header />
        <div className="container">
          <div className={styles.eventMainContent}>
            <h1 className={styles.eventMainTitle}>Event not found</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.eventMain}>
      <Header />
      <div className="container">
        <div className={styles.eventMainContent}>
          <p className={styles.eventMainHeading}>{event.category.toUpperCase()}</p>
          <h1 className={styles.eventMainTitle}>{event.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default EventMain;
