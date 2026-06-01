import React from 'react';

import styles from './CourseMainSteps.module.scss';

const CourseMainSteps: React.FC = () => {
  return (
    <section className={styles.courseMainSteps}>
      <div className="container">
        <div className={styles.mainStepsTitleContainer}>
          <p className={styles.mainStepsHeading}>MAIN STEPS</p>
          <h2 className={styles.mainStepsTitle}>Online learning process</h2>
        </div>
        <div className={styles.mainStepsContent}>
          <div className={styles.mainStepsInfo}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.dottedLineToNextStep} />
            </div>
            <h3 className={styles.stepTitle}>Watching online video lectures</h3>
            <p className={styles.stepText}>
              Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip
              sunt.
            </p>
          </div>
          <div className={styles.mainStepsInfo}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>02</span>
              <div className={styles.dottedLineToNextStep} />
            </div>
            <h3 className={styles.stepTitle}>Passing test</h3>
            <p className={styles.stepText}>
              Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim
              ad tempor est ea.
            </p>
          </div>
          <div className={styles.mainStepsInfo}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>03</span>
              <div className={styles.dottedLineToNextStep} />
            </div>
            <h3 className={styles.stepTitle}>Curator’s feedback</h3>
            <p className={styles.stepText}>
              Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam
              ad deserunt.
            </p>
          </div>
          <div className={styles.mainStepsInfo}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>04</span>
            </div>
            <h3 className={styles.stepTitle}>Corrections if needed</h3>
            <p className={styles.stepText}>
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco
              proident ea ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMainSteps;
