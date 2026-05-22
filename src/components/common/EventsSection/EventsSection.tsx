import React from 'react';
import styles from './Events.module.scss';
import dotsSvg from '../../../assets/images/homepage/events/events_dots.svg';
import circlesSvg from '../../../assets/images/homepage/events/events_circles.svg';

const EVENTS_DATA = [
    {
        id: 1,
        day: "05",
        month: "August",
        time: "11:00 - 14:00",
        isoDate: "2025-08-05",
        title: "Formation of the organizational structure of the company in the face of uncertainty.",
        type: "Online master-class",
        isLeftAligned: false
    },
    {
        id: 2,
        day: "24",
        month: "July",
        time: "11:00 - 12:30",
        isoDate: "2025-07-24",
        title: "Building a customer service department. Best Practices.",
        type: "Online lecture",
        isLeftAligned: true
    },
    {
        id: 3,
        day: "16",
        month: "July",
        time: "10:00 - 13:00",
        isoDate: "2025-07-16",
        title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
        type: "Online workshop",
        isLeftAligned: false
    }
];

const EventsSection: React.FC = () => {
    return (
        <section id="events" className={styles.eventsSection}>
            <img className={styles.eventsDots} src={dotsSvg} alt="events dots decoration"/>
            <img className={styles.eventsCircles} src={circlesSvg} alt="events circles decoration"/>
            <div className="container">
                <div className={styles.eventsContainer}>
                    <div className={styles.eventsHeader}>
                        <p className={styles.eventsHeaderSubtitle}>OUR EVENTS</p>
                        <h2 className={styles.eventsHeaderTitle}>Lectures & workshops</h2>
                    </div>
                    <div className={styles.eventsNavigation}>
                        <ul className={styles.eventsNavigationList}>
                            {EVENTS_DATA.map((event) => (
                                <li key={event.id} className={styles.eventsLink}>
                                    <div className={styles.eventsLinkDate}>
                                        <time dateTime={event.isoDate}>{event.day}</time>
                                        <div className={styles.eventsLinkMonthTime}>
                                            <p>
                                                <span>{event.month}</span>
                                                {event.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.eventsInfo} ${event.isLeftAligned ? styles.eventsInfoLeft : ''}`}>
                                        <span>{event.title}</span>
                                        {event.type}
                                    </div>
                                    <div className={styles.eventsLinkButton}>
                                        <button type="button" className={styles.eventsButton}>
                                            View More
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.eventsMore}>
                        <p className={styles.eventsMoreText}>Do you want more?</p>
                        <button type="button" className={styles.buttonPrimary}>
                            Explore all events
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventsSection;
