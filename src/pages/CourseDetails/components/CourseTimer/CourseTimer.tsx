import { inspect } from 'node:util';

import BackgroundCourseTimer from '@assets/images/courseDetails/BackgroundCourseTimer.jpg';
import styles = module;

const CourseTimer = () => {
  return (
    <section className={styles.courseTimer}>
      <div className="container">
        <figure className={styles.backgroundTimerImage}>
          <img
            src={BackgroundCourseTimer}
            alt={`Course Timer Image`}
            className={styles.backgroundCourseTimer}
          />
        </figure>
        <h6> 20% discount for early birds!</h6>
        <div className={inputCourse}>
          <p>Full name</p>
          <input/>
            <p>Your full name</p>
          </input>
        </div>
        <div className={inputCourseSecond}>
          <p>Email</p>
          <input/>
            <p>Your working email</p>
          </input>
        </div>
        <div className={inputCourseThird}>
            <p>Phone</p>
          <input/>
            <p>Your phone number</p>
          </input>
        </div>
      </div>
    </section>
  );
};
