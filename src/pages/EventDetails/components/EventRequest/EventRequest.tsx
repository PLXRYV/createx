import { CharacterRequest } from '@assets/images/eventDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import styles from '@pages/EventDetails/components/EventRequest/EventRequest.module.scss';
import React, { useState } from 'react';

const EventRequest: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Request submitted:', { fullName, email, phone });
  };

  return (
    <section className={styles.requestSection}>
      <div className="container">
        <div className={styles.requestGrid}>
          <div className={styles.formContainer}>
            <header className={styles.requestHeader}>
              <h5 className={styles.requestSubtitle}>Don’t miss the event</h5>
              <h2 className={styles.requestTitle}>Leave a request</h2>
            </header>

            <form className={styles.requestForm} onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="reqFullName">
                  Full name
                </label>
                <input
                  id="reqFullName"
                  className={styles.formInput}
                  type="text"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="reqEmail">
                  Email
                </label>
                <input
                  id="reqEmail"
                  className={styles.formInput}
                  type="email"
                  placeholder="Your working email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="reqPhone">
                  Phone
                </label>
                <input
                  id="reqPhone"
                  className={styles.formInput}
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <ButtonPrimary type="submit" className={styles.formSubmitBtn}>
                Join the event
              </ButtonPrimary>

              <p className={styles.formNote}>
                *You will receive a link to the online lecture in an email after registration.
              </p>
            </form>
          </div>

          <div className={styles.imageBlock}>
            <CharacterRequest />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRequest;
