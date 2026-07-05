import { SubscribeIllustration } from '@assets/images/common/subscribe';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React from 'react';

import styles from './Subscribe.module.scss';

const Subscribe: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribe form submitted');
  };

  return (
    <section id="contacts" className={styles.subscribeSection}>
      <div className={styles.subscribeContainer}>
        <div className={styles.subscribeHeader}>
          <p className={styles.subscribeHeaderSubtitle}>DON’T MISS ANYTHING</p>
          <h2 className={styles.subscribeHeaderTitle}>
            Subscribe to the CreateX School announcements
          </h2>
        </div>
        <div className={styles.subscribeFormBox}>
          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Your working email"
              className={styles.subscribeInput}
              required
            />
          </form>
          <ButtonPrimary type="submit" className={styles.buttonPrimary}>
            Subscribe
          </ButtonPrimary>
        </div>
      </div>
      <SubscribeIllustration className={styles.subscribeImageFirst} />
      <SubscribeIllustration className={styles.subscribeImageSecond} />
    </section>
  );
};

export default Subscribe;
