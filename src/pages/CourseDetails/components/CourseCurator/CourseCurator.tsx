import {
  Behance,
  Circles,
  Facebook,
  LinkedIn,
  Play,
  Profile,
  Star,
  Twitter,
} from '@assets/images/courseDetails';
import CuratorCodyFisher from '@assets/images/courseDetails/CuratorCodyFisher.jpg';
import { defaultCourses } from '@pages/Courses/components/CoursesGrid/CoursesGrid';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CourseCurator.module.scss';

const CourseCurator: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentCourse = defaultCourses.find((course) => course.id === Number(id));

  const curatorName = currentCourse?.speaker || 'Cody Fisher';
  const curatorCategory = currentCourse?.category || 'design';

  const generatedRating = (4.5 + (((Number(id) || 1) * 0.05) % 0.5)).toFixed(1);
  const generatedCoursesCount = 2 + ((Number(id) || 1) % 5);
  const generatedStudentsCount = 120 + (Number(id) || 1) * 35;

  const getCuratorPosition = (category: string) => {
    switch (category) {
      case 'marketing':
        return 'Lead Marketing Strategist';
      case 'management':
        return 'Product Management Director';
      case 'hr':
        return 'Head of Talent Acquisition';
      case 'development':
        return 'Senior Full-Stack Architect';
      default:
        return 'Senior UX/UI Designer';
    }
  };
  return (
    <section className={styles.courseCuratorSection}>
      <div className="container">
        <div className={styles.curatorGrid}>
          <div className={styles.curatorVisualBlock}>
            <div className={styles.circlesWrapper}>
              <Circles />
            </div>
            <figure className={styles.curatorImageHolder}>
              <img
                src={CuratorCodyFisher}
                alt={`Curator ${curatorName}`}
                className={styles.curatorPhoto}
              />
            </figure>
          </div>
          <div className={styles.curatorMainInfo}>
            <header className={styles.curatorHeader}>
              <p className={styles.curatorSubtitle}>COURSE CURATOR</p>
              <h2 className={styles.curatorTitle}>{curatorName}</h2>
              <h3 className={styles.curatorPosition}>{getCuratorPosition(curatorCategory)}</h3>
            </header>
            <ul className={styles.curatorStatsList}>
              <li className={styles.curatorStatsItem}>
                <Star />
                <span>{generatedRating} rate</span>
              </li>
              <li className={styles.curatorStatsItem}>
                <Play />
                <span>{generatedCoursesCount} courses</span>
              </li>
              <li className={styles.curatorStatsItem}>
                <Profile />
                <span>{generatedStudentsCount} students</span>
              </li>
            </ul>
            <blockquote className={styles.curatorBio}>
              <p>
                Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur
                venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis
                commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel
                diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id
                habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
                sollicitudin interdum quam.
              </p>
            </blockquote>
            <div className={styles.curatorSocialLinks}>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Behance">
                <Behance />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurator;
