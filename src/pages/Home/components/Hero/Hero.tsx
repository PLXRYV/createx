import { IllustrationMain, MainPlayVideo } from '@assets/images/homepage/hero';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@components/ui/ButtonSecondary/ButtonSecondary';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Hero.module.scss';

interface HeroProps {
  additionalButton?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ additionalButton }) => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className={styles.mainContent}>
          <div className={styles.mainInfo}>
            <div className={styles.mainInfoVideo}>
              <button type="button" className={styles.mainVideoButton} aria-label="Play showreel">
                <MainPlayVideo />
              </button>
              <p className={styles.mainVideoText}>Play showreel</p>
            </div>
            <h1 className={styles.mainInfoTitle}>Enjoy studying with Createx Online Courses</h1>
            <div className={styles.mainInfoActions}>
              <ButtonSecondary className={`${styles.button} ${styles.buttonSecondary}`}>
                About Us
              </ButtonSecondary>
              <Link to="/courses">
                <ButtonPrimary>Explore courses</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className={styles.mainIllustrationContainer}>
            <IllustrationMain className={styles.mainIllustration} />
          </div>
        </div>
        <div className={styles.stats}>
          <ul className={styles.statsItems}>
            <li className={styles.statsItem}>
              <span className={styles.statsItemNumber}>1200</span>
              <span className={styles.statsItemText}>Students graduated</span>
            </li>
            <li className={styles.statsItemCircle}></li>
            <li className={styles.statsItem}>
              <span className={styles.statsItemNumber}>84</span>
              <span className={styles.statsItemText}>Completed Courses</span>
            </li>
            <li className={styles.statsItemCircle}></li>
            <li className={styles.statsItem}>
              <span className={styles.statsItemNumber}>16</span>
              <span className={styles.statsItemText}>Qualified tutors</span>
            </li>
            <li className={styles.statsItemCircle}></li>
            <li className={styles.statsItem}>
              <span className={styles.statsItemNumber}>5</span>
              <span className={styles.statsItemText}>Years of experience</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
