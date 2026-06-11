import { Check } from '@assets/images/courseDetails';
import React from 'react';

import styles from './CourseBenefits.module.scss';

const CourseBenefits: React.FC = () => {
  return (
    <section className={styles.courseBenefitsSection}>
      <div className="container">
        <div className={styles.benefitsWrapper}>
          <div className={styles.courseBenefitsTitle}>
            <h5>FOR WHOM?</h5>
            <h2>Who will benefit from the course:</h2>
          </div>
          <ul className={styles.courseBenefitsList}>
            <li className={styles.courseBenefitsItem}>
              <Check />
              <span>Specialists with more than 1 year of active work experience</span>
            </li>
            <li className={styles.courseBenefitsItem}>
              <Check />
              <span>
                Mobile app designers who want to improve their skills in solving business problems,
                creating and testing human-centered interfaces
              </span>
            </li>
            <li className={styles.courseBenefitsItem}>
              <Check />
              <span>Professional designers who want to feel more confident in UX</span>
            </li>
            <li className={styles.courseBenefitsItem}>
              <Check />
              <span>Specialists who would like to structure their knowledge, fill in the gaps</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
