import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import styles from '@pages/EventDetails/components/EventAbout/EventAbout.module.scss';
import { EVENTS_DATA } from '@pages/EventsList/EventsRoad';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TOPICS_DATA = [
  {
    id: 1,
    numberText: 'Theme 1.',
    titleText: 'Aliquet lectus urna viverra in odio.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.',
  },
  {
    id: 2,
    numberText: 'Theme 2.',
    titleText: 'Orci commodo, viverra orci mollis ut euismod.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.',
  },
  {
    id: 3,
    numberText: 'Theme 3.',
    titleText: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.',
  },
  {
    id: 4,
    numberText: 'Theme 4.',
    titleText: 'In id dolor quis nunc, urna hendrerit pharetra.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis.',
  },
];

const EventAbout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTopicId, setActiveTopicId] = useState<number | null>(1);

  const event = EVENTS_DATA.find((item) => item.id === Number(id));

  const toggleTopic = (id: number) => {
    setActiveTopicId(activeTopicId === id ? null : id);
  };

  if (!event) return null;

  const displayPrice = event.id <= 2 ? 'Free' : `$${40 + event.id * 5}`;

  return (
    <section className={styles.eventAboutSection}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.topicsBlock}>
            <h2 className={styles.sectionTitle}>We will talk about</h2>
            <ul className={styles.topicsList}>
              {TOPICS_DATA.map((topic) => {
                const isOpen = activeTopicId === topic.id;

                return (
                  <li
                    key={topic.id}
                    className={`${styles.topicItem} ${isOpen ? styles.topicActive : ''}`}
                  >
                    <button
                      type="button"
                      className={styles.topicTrigger}
                      onClick={() => toggleTopic(topic.id)}
                    >
                      <div className={styles.topicIconDivider}></div>
                      <div className={styles.topicTitleBlock}>
                        <span className={styles.topicNumber}>{topic.numberText}</span>
                        <span className={styles.topicTitleText}>{topic.titleText}</span>
                      </div>
                    </button>
                    {isOpen && <p className={styles.topicContent}>{topic.content}</p>}
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className={styles.eventDescriptionContainer}>
            <div className={styles.eventDates}>
              <h3>Time</h3>
              <p className={styles.eventTimeValue}>
                {event.month} {event.day}, {event.time}
              </p>
              <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
            </div>

            <div className={styles.eventPrice}>
              <h3>PRICE</h3>
              <p className={styles.priceValue}>{displayPrice}</p>
              <p>
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit
                tristique dis.
              </p>
            </div>
            <ButtonPrimary type="button" className={styles.joinBtn}>
              Join the event
            </ButtonPrimary>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
