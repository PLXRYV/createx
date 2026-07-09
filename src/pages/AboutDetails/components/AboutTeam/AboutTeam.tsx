import {
  Facebook,
  ImageTeamEighth,
  ImageTeamFifth,
  ImageTeamFirst,
  ImageTeamFourth,
  ImageTeamSecond,
  ImageTeamSeventh,
  ImageTeamSixth,
  ImageTeamThird,
  Instagram,
  Linkedin,
} from '@assets/images/aboutDetails';
import React from 'react';

import styles from './AboutTeam.module.scss';

const TUTORS_DATA = [
  { id: 1, name: 'Dianne Russell', role: 'Founder and CEO', img: ImageTeamFirst },
  { id: 2, name: 'Jerome Bell', role: 'Founder and Program Director', img: ImageTeamSecond },
  {
    id: 3,
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',
    img: ImageTeamThird,
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    img: ImageTeamFourth,
  },
  {
    id: 5,
    name: 'Leslie Alexander Li',
    role: 'Curator of HR & Recruiting Course',
    img: ImageTeamFifth,
  },
  {
    id: 6,
    name: 'Kathryn Murphy',
    role: 'Analyst and Marketing specialist',
    img: ImageTeamSixth,
  },
  {
    id: 7,
    name: 'Brooklyn Simmons',
    role: 'Curator of Development Course',
    img: ImageTeamSeventh,
  },
  {
    id: 8,
    name: 'Cody Fisher',
    role: 'UX Designer, Curator of Design Course',
    img: ImageTeamEighth,
  },
];

const AboutTeam: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.teamContainer}>
          <header className={styles.teamHeader}>
            <p className={styles.teamSubtitle}>BEST TUTORS ARE ALL HERE</p>
            <h2 className={styles.teamTitle}>Meet our team</h2>
          </header>

          <div className={styles.teamGrid}>
            {TUTORS_DATA.map((tutor) => (
              <div key={tutor.id} className={styles.teamNavigationItem}>
                <div className={styles.teamNavigationItemImages}>
                  <img className={styles.teamImage} src={tutor.img} alt={tutor.name} />

                  <div className={styles.teamSocialOverlay}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className={styles.teamSocialLink}
                      aria-label="Facebook"
                    >
                      <Facebook className={styles.teamSocial} />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className={styles.teamSocialLink}
                      aria-label="Instagram"
                    >
                      <Instagram className={styles.teamSocial} />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className={styles.teamSocialLink}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className={styles.teamSocial} />
                    </a>
                  </div>
                </div>
                <p className={styles.teamImageCaption}>
                  <span className={styles.tutorName}>{tutor.name}</span>
                  <span className={styles.tutorRole}>{tutor.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
