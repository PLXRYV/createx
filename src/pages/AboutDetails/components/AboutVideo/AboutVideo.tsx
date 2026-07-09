import { ImagePlayVideo, PlayBtn } from '@assets/images/aboutDetails';
import styles from '@pages/AboutDetails/components/AboutVideo/AboutVideo.module.scss';
import React from 'react';

const AboutVideo: React.FC = () => {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.videoPlayTrigger}>
          <button type="button" className={styles.playButton} aria-label="Play video">
            <PlayBtn />
          </button>
          <span className={styles.playText}>Watch Video</span>
        </div>

        <div className={styles.videoMainGrid}>
          <div className={styles.videoPreviewBlock}>
            <figure className={styles.videoCover}>
              <img
                src={ImagePlayVideo}
                alt="Createx promo video cover"
                className={styles.videoImg}
              />
            </figure>
          </div>

          <div className={styles.statsContainer}>
            <ul className={styles.statsList}>
              <li className={styles.statsItem}>
                <span className={styles.statsNumber}>1200</span>
                <p className={styles.statsText}>students graduated</p>
              </li>
              <li className={styles.statsItem}>
                <span className={styles.statsNumber}>84</span>
                <p className={styles.statsText}>completed courses</p>
              </li>
              <li className={styles.statsItem}>
                <span className={styles.statsNumber}>16</span>
                <p className={styles.statsText}>qualified tutors</p>
              </li>
              <li className={styles.statsItem}>
                <span className={styles.statsNumber}>5</span>
                <p className={styles.statsText}>years of experience</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
