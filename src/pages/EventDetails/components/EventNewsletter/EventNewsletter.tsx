import { IllustrationNewsletter } from '@assets/images/eventDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import styles from '@pages/EventDetails/components/EventNewsletter/EventNewsletter.module.scss';
import React, { useState } from 'react';

const EventNewsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter submitted:', { email, agree });
  };

  return (
    <section className={styles.newsletterSection}>
      <div className="container">
        <div className={styles.newsletterCard}>
          <div className={styles.illustrationWrapper}>
            <IllustrationNewsletter />
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.newsletterTitle}>
              Don’t want to miss the best events? Subscribe to our newsletter!
            </h2>

            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="Your working email"
                  value={email}
                  onChange={(e) => setEmail(targetValueSelector(e))}
                  required
                />
                <ButtonPrimary type="submit" className={styles.submitBtn}>
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

const targetValueSelector = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value;

export default EventNewsletter;
