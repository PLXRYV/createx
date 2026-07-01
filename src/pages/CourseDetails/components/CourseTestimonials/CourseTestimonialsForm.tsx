import { CourseIllustrationTestimonials } from '@assets/images/courseDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React from 'react';

import styles from './CourseTestimonialsForm.module.scss';

const CourseTestimonialsForm: React.FC = () => {
  return (
    <section className={styles.testimonialsFormSection}>
      <div className="container">
        <div className={styles.courseTestimonialsFormContainer}>
          <div className={styles.imageBlock}>
            <CourseIllustrationTestimonials className={styles.illustration} />
          </div>
          <div className={styles.testimonialsFormContainer}>
            <h5>Leave a request now and get 20% off!</h5>
            <h2>Register for the course</h2>
            <form className={styles.testimonialsForm}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="timerFullName">
                  Full name
                </label>
                <input
                  id="timerFullName"
                  className={styles.formInput}
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="timerEmail">
                  Email
                </label>
                <input
                  id="timerEmail"
                  className={styles.formInput}
                  type="email"
                  placeholder="Your working email"
                  required
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="timerPhone">
                  Phone
                </label>
                <input
                  id="timerPhone"
                  className={styles.formInput}
                  type="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <ButtonPrimary type="submit" className={styles.formSubmitBtn}>
                Join the course
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTestimonialsForm;
