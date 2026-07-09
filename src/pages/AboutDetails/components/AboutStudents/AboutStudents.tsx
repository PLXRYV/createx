import {
  StudentsWorkEighth,
  StudentsWorkEleventh,
  StudentsWorkFifth,
  StudentsWorkFirst,
  StudentsWorkFourth,
  StudentsWorkNinth,
  StudentsWorkSecond,
  StudentsWorkSeventh,
  StudentsWorkSixth,
  StudentsWorkTenth,
  StudentsWorkThird,
  StudentsWorkTwelfth,
} from '@assets/images/aboutDetails';
import TestimonialsSection from '@components/common/TestimonialsSection/TestimonialsSection';
import React from 'react';

import styles from './AboutStudents.module.scss';

const LOGOS_DATA = [
  { id: 1, Component: StudentsWorkFirst, alt: 'Company 1' },
  { id: 2, Component: StudentsWorkSecond, alt: 'Company 2' },
  { id: 3, Component: StudentsWorkThird, alt: 'Company 3' },
  { id: 4, Component: StudentsWorkFourth, alt: 'Company 4' },
  { id: 5, Component: StudentsWorkFifth, alt: 'Company 5' },
  { id: 6, Component: StudentsWorkSixth, alt: 'Company 6' },
  { id: 7, Component: StudentsWorkSeventh, alt: 'Company 7' },
  { id: 8, Component: StudentsWorkEighth, alt: 'Company 8' },
  { id: 9, Component: StudentsWorkNinth, alt: 'Company 9' },
  { id: 10, Component: StudentsWorkTenth, alt: 'Company 10' },
  { id: 11, Component: StudentsWorkEleventh, alt: 'Company 11' },
  { id: 12, Component: StudentsWorkTwelfth, alt: 'Company 12' },
];

const AboutStudents: React.FC = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.testimonialsInlineWrapper}>
        <TestimonialsSection />
      </div>

      <section className={styles.jobsSection}>
        <div className="container">
          <div className={styles.jobsContainer}>
            <header className={styles.jobsHeader}>
              <h5 className={styles.jobsSubtitle}>best jobs for you</h5>
              <h2 className={styles.jobsTitle}>Our students work here</h2>
            </header>

            <div className={styles.logosGrid}>
              {LOGOS_DATA.map(({ id, Component, alt }) => (
                <div key={id} className={styles.logoItem}>
                  <Component aria-label={alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStudents;
