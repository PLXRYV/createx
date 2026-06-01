import Header from '@components/common/Header/Header';
import React from 'react';

import styles from './CourseMain.module.scss';

const CourseMain: React.FC = () => {
  return (
    <section className={styles.courseBackground}>
      <Header />
      <div className="container">
        <div className={styles.courseMainContent}>
          <p className={styles.courseMainHeading}>Courses</p>
          <h1 className={styles.courseMainTitle}>
            User Experience. Principles of Human-Centered Design
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CourseMain;
