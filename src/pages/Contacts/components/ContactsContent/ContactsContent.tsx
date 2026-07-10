import {
  Chat,
  Facebook,
  Illustration,
  Instagram,
  LinkedIn,
  Map,
  Outline,
  Phone,
  Telegram,
  Twitter,
  YouTube,
} from '@assets/images/contacts';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useState } from 'react';

import styles from './ContactsContent.module.scss';

const ContactsContent: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Feedback submitted:', { firstName, lastName, email, phone, message, agree });
  };

  return (
    <div className={styles.contactsPageWrapper}>
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <header className={styles.sectionHeader}>
                <h5 className={styles.sectionSubtitle}>CONTACT INFO</h5>
                <h2 className={styles.sectionTitle}>Get in touch</h2>
              </header>

              <ul className={styles.contactsList}>
                <li className={styles.contactsItem}>
                  <Chat className={styles.contactIcon} />
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Talk to us:</span>
                    <a href="mailto:hello@createx.com" className={styles.contactLink}>
                      hello@createx.com
                    </a>
                  </div>
                </li>

                <li className={styles.contactsItem}>
                  <Phone className={styles.contactIcon} />
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Call us:</span>
                    <a href="tel:4055550128" className={styles.contactLink}>
                      (405) 555-0128
                    </a>
                  </div>
                </li>

                <li className={styles.contactsItem}>
                  <Outline className={styles.contactIcon} />
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Address:</span>
                    <address className={styles.contactAddress}>
                      2464 Royal Ln. Mesa, New Jersey 45463, USA
                    </address>
                  </div>
                </li>
              </ul>

              <div className={styles.socialsBlock}>
                <h6 className={styles.socialsTitle}>FOLLOW US:</h6>
                <div className={styles.socialsLinks}>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                    <Facebook />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                    <Twitter />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="YouTube">
                    <YouTube />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Telegram">
                    <Telegram />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                    <Instagram />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mapBlock}>
              <figure className={styles.mapHolder}>
                <img src={Map} alt="Createx office location map" className={styles.mapImg} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>
            <div className={styles.illustrationBlock}>
              <img
                src={Illustration}
                alt="Feedback form illustration"
                className={styles.illustrationImg}
              />
            </div>

            <div className={styles.formBlock}>
              <header className={styles.sectionHeader}>
                <h5 className={styles.sectionSubtitle}>ANY QUESTIONS?</h5>
                <h2 className={styles.sectionTitle}>Drop us a line</h2>
              </header>

              <form className={styles.feedbackForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.formLabel} htmlFor="cntFirstName">
                      First Name*
                    </label>
                    <input
                      id="cntFirstName"
                      type="text"
                      className={styles.formInput}
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.formLabel} htmlFor="cntLastName">
                      Last Name*
                    </label>
                    <input
                      id="cntLastName"
                      type="text"
                      className={styles.formInput}
                      placeholder="Your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.formLabel} htmlFor="cntEmail">
                      Email*
                    </label>
                    <input
                      id="cntEmail"
                      type="email"
                      className={styles.formInput}
                      placeholder="Your working email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.formLabel} htmlFor="cntPhone">
                      Phone
                    </label>
                    <input
                      id="cntPhone"
                      type="tel"
                      className={styles.formInput}
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroupFull}>
                  <label className={styles.formLabel} htmlFor="cntMessage">
                    Message*
                  </label>
                  <textarea
                    id="cntMessage"
                    className={styles.formTextarea}
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formFooterRow}>
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

                  <ButtonPrimary type="submit" className={styles.submitButton}>
                    Send message
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsContent;
