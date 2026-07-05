import BackgroundCourseTimer from '@assets/images/courseDetails/BackgroundCourseTimer.jpg';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useEffect, useState } from 'react';

import styles from './CourseTimer.module.scss';

const CourseTimer: React.FC = () => {
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 18,
    minutes: 24,
    seconds: 12,
  });

  useEffect(() => {
    const STORAGE_KEY = 'course_promo_deadline';
    let deadlineStr = localStorage.getItem(STORAGE_KEY);

    if (!deadlineStr) {
      const newDeadline = new Date();
      newDeadline.setDate(newDeadline.getDate() + 6);
      newDeadline.setHours(newDeadline.getHours() + 18);
      newDeadline.setMinutes(newDeadline.getMinutes() + 24);
      newDeadline.setSeconds(newDeadline.getSeconds() + 12);

      deadlineStr = String(newDeadline.getTime());
      localStorage.setItem(STORAGE_KEY, deadlineStr);
    }

    const targetTime = Number(deadlineStr);
    const initialNow = new Date().getTime();

    if (targetTime - initialNow <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        localStorage.removeItem(STORAGE_KEY);
        setIsExpired(true);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration form submitted');
  };

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  if (isExpired) {
    return null;
  }

  return (
    <section className={styles.courseTimerSection}>
      <div className="container">
        <div className={styles.timerContent}>
          <div className={styles.backgroundWrapper}>
            <img
              src={BackgroundCourseTimer}
              alt="Course Promo Background"
              className={styles.backgroundImage}
            />
          </div>

          <div className={styles.topRow}>
            <h2 className={styles.promoTitle}>20% discount for early birds!</h2>
            <div className={styles.countdown}>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber}>{formatNumber(timeLeft.days)}</span>
                <span className={styles.countdownLabel}>Days</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber}>{formatNumber(timeLeft.hours)}</span>
                <span className={styles.countdownLabel}>Hours</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber}>{formatNumber(timeLeft.minutes)}</span>
                <span className={styles.countdownLabel}>Mins</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber}>{formatNumber(timeLeft.seconds)}</span>
                <span className={styles.countdownLabel}>Secs</span>
              </div>
            </div>
          </div>

          <form className={styles.timerForm} onSubmit={handleSubmit}>
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
    </section>
  );
};

export default CourseTimer;
