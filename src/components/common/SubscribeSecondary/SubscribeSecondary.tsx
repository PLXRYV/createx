import IllustrationSubscribe from '@assets/images/common/subscribeSecondary/IllustrationSubscribe.png';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useState } from 'react';

import styles from './SubscribeSecondary.module.scss';

const SubscribeSecondary: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribe secondary submitted:', { email, agree });
  };

  return (
    <section className={styles.subscribeSection}>
      <div className="container">
        <div className={styles.subscribeGrid}>
          <div className={styles.imageBlock}>
            <img
              src={IllustrationSubscribe}
              alt="Subscribe newsletter illustration"
              className={styles.subscribeImg}
            />
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subscribeTitle}>
              Want to get the best articles weekly? Subscribe to our newsletter!
            </h2>

            <form className={styles.subscribeForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your working email"
                  className={styles.subscribeInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ButtonPrimary type="submit" className={styles.buttonPrimary}>
                  Subscribe
                </ButtonPrimary>
              </div>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkboxInput}
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <span className={styles.checkmark}></span>
                <span className={styles.checkboxText}>
                  I agree to receive communications from Createx Online School
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSecondary;
