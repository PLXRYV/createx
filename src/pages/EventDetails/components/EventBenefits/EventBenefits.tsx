import { EventCheck } from '@assets/images/eventDetails';
import styles from '@pages/EventDetails/components/EventBenefits/EventBenefits.module.scss';
import React from 'react';

const EventBenefits: React.FC = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitsHeader}>
            <h5 className={styles.benefitsSubtitle}>FOR WHOM?</h5>
            <h2 className={styles.benefitsTitle}>Who will benefit from the event:</h2>
          </div>

          <div className={styles.benefitsList}>
            <div className={styles.benefitsItem}>
              <div className={styles.iconWrapper}>
                <EventCheck />
              </div>
              <p className={styles.benefitsText}>
                Specialists with more than 1 year of active work experience
              </p>
            </div>

            <div className={styles.benefitsItem}>
              <div className={styles.iconWrapper}>
                <EventCheck />
              </div>
              <p className={styles.benefitsText}>
                Mobile app designers who want to improve their skills in solving business problems,
                creating and testing human-centered interfaces
              </p>
            </div>

            <div className={styles.benefitsItem}>
              <div className={styles.iconWrapper}>
                <EventCheck />
              </div>
              <p className={styles.benefitsText}>
                Professional designers who want to feel more confident in UX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBenefits;
