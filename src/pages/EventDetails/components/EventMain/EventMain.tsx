import Header from '@components/common/Header/Header';
import styles from '@pages/CourseDetails/components/CourseMain/CourseMain.module.scss';
import React from 'react';

const EventMain = () => {
  return (
    <section className="eventMain">
      <Header />
      <div className="container">
        <div className={styles.eventMainContent}>
          <p className={styles.eventMainHeading}>ONLINE LECTURE</p>
          <h1 className={styles.eventMainTitle}>
            Formation of the organizational structure of the company in the face of uncertainty
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EventMain;
