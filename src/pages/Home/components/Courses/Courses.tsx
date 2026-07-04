import courseImg1 from '@assets/images/homepage/courses/course-1.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

import courseImg2 from '../../../../assets/images/homepage/courses/course-2.jpg';
import courseImg3 from '../../../../assets/images/homepage/courses/course-3.jpg';
import courseImg4 from '../../../../assets/images/homepage/courses/course-4.jpg';
import courseImg5 from '../../../../assets/images/homepage/courses/course-5.jpg';
import courseImg6 from '../../../../assets/images/homepage/courses/course-6.jpg';
import styles from './Courses.module.scss';

export interface Course {
  id: number;
  image: string;
  badge: string;
  title: string | React.ReactNode;
  price: string;
  speaker: string;
}

export const defaultCourses: Course[] = [
  {
    id: 1,
    image: courseImg1,
    badge: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '$200',
    speaker: 'Jerome Bell',
  },
  {
    id: 2,
    image: courseImg2,
    badge: 'Management',
    title: (
      <>
        <span>Product Management </span>
        <span>Fundamentals</span>
      </>
    ),
    price: '$480',
    speaker: 'Marvin McKinney',
  },
  {
    id: 3,
    image: courseImg3,
    badge: 'HR & Recruiting',
    title: 'HR Management and Analytics',
    price: '$200',
    speaker: 'Leslie Alexander Li',
  },
  {
    id: 4,
    image: courseImg4,
    badge: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: '$530',
    speaker: 'Kristin Watson',
  },
  {
    id: 5,
    image: courseImg5,
    badge: 'Management',
    title: (
      <>
        <span>Business Development </span>
        <span>Management</span>
      </>
    ),
    price: '$400',
    speaker: 'Dianne Russell',
  },
  {
    id: 6,
    image: courseImg6,
    badge: 'Design',
    title: 'Graphic Design Basic',
    price: '$500',
    speaker: 'Guy Hawkins',
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        <div className={styles.coursesContainHeader}>
          <div className={styles.coursesHeader}>
            <h6 className={styles.coursesHeaderTtitle}>
              <span>READY TO LEARN?</span>
              Featured Courses
            </h6>
          </div>
          <Link to="/courses">
            <button className={styles.buttonSecondary}>View all courses</button>
          </Link>
        </div>
        <div className={styles.coursesContent}>
          {defaultCourses.map((course) => (
            <div key={course.id} className={styles.coursesContainerCard}>
              <img
                className={styles.coursesContentImg}
                src={course.image}
                alt={`Course ${course.speaker}`}
              />
              <div className={styles.coursesContentCard}>
                <Link to={`/courses/${course.id}`} className={styles.coursesCardLink}>
                  <div className={styles.coursesCardContent}>
                    <p className={styles.coursesCardBadge}>{course.badge}</p>
                    <h3 className={styles.coursesCardTag}>{course.title}</h3>
                    <div className={styles.coursesCardInfo}>
                      <p className={styles.coursesCardPrice}>{course.price}</p>
                      <div className={styles.containDivider}>
                        <div className={styles.verticalDivider}></div>
                      </div>
                      <p className={styles.coursesCardSpeaker}>by {course.speaker}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
