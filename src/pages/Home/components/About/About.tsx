import { AboutImage, Check, Circles, Dots } from '@assets/images/homepage/about';
import React from 'react';

import styles from './About.module.scss';

const ADVANTAGES_DATA = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
];

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <Dots className={styles.dotsImage} />
      <div className={styles.container}>
        <div className={styles.aboutBox}>
          <div>
            <img src={AboutImage} alt="About Createx team" className={styles.aboutImg} />
          </div>
          <div className={styles.aboutInner}>
            <h4 className={styles.aboutInnerSubtitle}>WHO WE ARE</h4>
            <h6 className={styles.aboutInnerTitle}>Why Createx?</h6>
            <div className={styles.aboutInfo}>
              <ul className={`${styles.aboutText} ${styles.aboutList}`}>
                {ADVANTAGES_DATA.map((text, index) => (
                  <li key={index} className={`${styles.aboutInfoText} ${styles.aboutListItem}`}>
                    <Check className={styles.aboutListItemIcon} />
                    <p className={styles.aboutListItemText}>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className={styles.buttonPrimary}>
              More about us
            </button>
          </div>
        </div>
      </div>
      <div className={styles.circlesImageContainer}>
        <Circles className={styles.circlesImage} />
      </div>
    </section>
  );
};

export default About;
