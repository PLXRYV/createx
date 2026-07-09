import { MainIllustration } from '@assets/images/aboutDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@components/ui/ButtonSecondary/ButtonSecondary';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AboutMain.module.scss';

const AboutMain: React.FC = () => {
  return (
    <section className={styles.aboutMainSection}>
      <div className="container">
        <div className={styles.aboutMainGrid}>
          <div className={styles.contentBlock}>
            <header className={styles.aboutHeader}>
              <h5 className={styles.aboutSubtitle}>ABOUT US</h5>
              <h2 className={styles.aboutTitle}>Createx Online School</h2>
            </header>

            <div className={styles.textContainer}>
              <p className={styles.textLead}>
                Createx Online School is a leader in online studying. We have lots of courses and
                programs from the main market experts.
              </p>
              <p className={styles.textNormal}>
                We provide relevant approaches to online learning, internships and employment in the
                largest companies in the country. Our educational programs help you get a new
                specialty from scratch. During your studies, we will help you find a job. Check the
                courses and online events that we organise.
              </p>
            </div>

            <div className={styles.actionsBlock}>
              <Link to="/events">
                <ButtonSecondary type="button">Explore events</ButtonSecondary>
              </Link>
              <Link to="/courses">
                <ButtonPrimary type="button">Browse courses</ButtonPrimary>
              </Link>
            </div>
          </div>

          <div className={styles.imageBlock}>
            <MainIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
