import { ArrowLeft, ArrowRight } from '@assets/images/eventDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import styles from '@pages/EventDetails/components/EventMore/EventMore.module.scss';
import { EVENTS_DATA } from '@pages/EventsList/EventsRoad';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EventMore: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentEventId = Number(id);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const suggestedEvents = EVENTS_DATA.filter((event) => event.id !== currentEventId);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? suggestedEvents.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= suggestedEvents.length - 3 ? 0 : prev + 1));
  };

  const visibleEvents = suggestedEvents.slice(currentIndex, currentIndex + 3);

  return (
    <section className={styles.moreEventsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.titleBlock}>
            <h5 className={styles.subtitle}>Check other online events</h5>
            <h2 className={styles.title}>You may be interested in</h2>
          </div>
          <div className={styles.sliderArrows}>
            <button type="button" onClick={handlePrev} className={styles.arrowBtn}>
              <ArrowLeft />
            </button>
            <button type="button" onClick={handleNext} className={styles.arrowBtn}>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.eventsGridWrapper}>
          {visibleEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventDateBlock}>
                <span className={styles.eventDay}>{event.day}</span>
                <div className={styles.eventMonthTime}>
                  <span className={styles.eventMonth}>{event.month}</span>
                  <span className={styles.eventTime}>{event.time}</span>
                </div>
              </div>
              <div className={styles.eventInfoBlock}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventCategory}>{event.category}</p>
              </div>
              <Link to={`/events/${event.id}`} className={styles.eventBtnLink}>
                View more
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.sectionFooter}>
          <p className={styles.footerText}>Do you want more?</p>
          <Link to="/events">
            <ButtonPrimary type="button">Explore all events</ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventMore;
