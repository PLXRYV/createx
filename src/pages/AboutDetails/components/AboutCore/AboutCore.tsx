import { ImageCalendar, ImageChat, ImageGroup, ImageStructure } from '@assets/images/aboutDetails';
import styles from '@pages/AboutDetails/components/AboutCore/AboutCore.module.scss';
import React from 'react';

const AboutCore: React.FC = () => {
  return (
    <section className={styles.coreSection}>
      <div className="container">
        <div className={styles.coreContainer}>
          <header className={styles.coreHeader}>
            <h5 className={styles.coreSubtitle}>We always stand for</h5>
            <h2 className={styles.coreTitle}>Our core values</h2>
          </header>

          <div className={styles.coreGrid}>
            <div className={styles.coreCard}>
              <div className={styles.iconWrapper}>
                <ImageStructure />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Structured Approach</h3>
                <p className={styles.cardText}>
                  Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
                </p>
              </div>
            </div>

            <div className={styles.verticalDivider}></div>

            <div className={styles.coreCard}>
              <div className={styles.iconWrapper}>
                <ImageChat />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Professional Feedbacks</h3>
                <p className={styles.cardText}>
                  Culpa nostrud commodo ea consequat reprehenderit aliquip.
                </p>
              </div>
            </div>

            <div className={styles.verticalDivider}></div>

            <div className={styles.coreCard}>
              <div className={styles.iconWrapper}>
                <ImageGroup />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Efficiency</h3>
                <p className={styles.cardText}>
                  Viverra scelerisque consequat net. Adipisicing esse consequat.
                </p>
              </div>
            </div>

            <div className={styles.verticalDivider}></div>

            <div className={styles.coreCard}>
              <div className={styles.iconWrapper}>
                <ImageCalendar />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Flexible Shedule</h3>
                <p className={styles.cardText}>
                  Aute eiusmod dolore dolore deserunt veniam ad deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCore;
