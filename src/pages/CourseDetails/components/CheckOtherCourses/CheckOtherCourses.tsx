import { ArrowLeft, ArrowRight } from '@assets/images/courseDetails';
import courseImg1 from '@assets/images/homepage/courses/course-1.jpg';
import courseImg2 from '@assets/images/homepage/courses/course-2.jpg';
import courseImg3 from '@assets/images/homepage/courses/course-3.jpg';
import courseImg4 from '@assets/images/homepage/courses/course-4.jpg';
import courseImg5 from '@assets/images/homepage/courses/course-5.jpg';
import courseImg6 from '@assets/images/homepage/courses/course-6.jpg';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './CheckOtherCourses.module.scss';

const COURSES_DATA = [
  {
    id: 1,
    image: courseImg1,
    badge: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '$200',
    speaker: 'Jerome Bell',
    categoryClass: styles.marketingBadge,
  },
  {
    id: 2,
    image: courseImg2,
    badge: 'Management',
    title: 'Product Management Fundamentals',
    price: '$480',
    speaker: 'Marvin McKinney',
    categoryClass: styles.managementBadge,
    isSplitTitle: true,
  },
  {
    id: 3,
    image: courseImg3,
    badge: 'HR & Recruiting',
    title: 'HR Management and Analytics',
    price: '$200',
    speaker: 'Leslie Alexander Li',
    categoryClass: styles.hrBadge,
  },
  {
    id: 4,
    image: courseImg4,
    badge: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: '$530',
    speaker: 'Kristin Watson',
    categoryClass: styles.marketingBadge,
  },
  {
    id: 5,
    image: courseImg5,
    badge: 'Management',
    title: 'Business Development Management',
    price: '$400',
    speaker: 'Dianne Russell',
    categoryClass: styles.managementBadge,
    isSplitTitle: true,
  },
  {
    id: 6,
    image: courseImg6,
    badge: 'Design',
    title: 'Graphic Design Basic',
    price: '$500',
    speaker: 'Guy Hawkins',
    categoryClass: styles.designBadge,
  },
];

const CheckOtherCourses: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? COURSES_DATA.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= COURSES_DATA.length - 2 ? 0 : prev + 1));
  };

  const visibleCourses = COURSES_DATA.slice(currentIndex, currentIndex + 2);

  return (
    <section className={styles.checkCoursesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.titleBlock}>
            <h5>Check other courses</h5>
            <h2>You may also like</h2>
          </div>
          <div className={styles.controlsWrapper}>
            <div className={styles.sliderArrows}>
              <button type="button" onClick={handlePrev} className={styles.arrowBtn}>
                <ArrowLeft />
              </button>
              <button type="button" onClick={handleNext} className={styles.arrowBtn}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.coursesGridWrapper}>
          {visibleCourses.map((course) => (
            <div key={course.id} className={styles.coursesContainerCard}>
              <img className={styles.coursesContentImg} src={course.image} alt={course.title} />
              <div className={styles.coursesContentCard}>
                <Link to={`/courses/${course.id}`} className={styles.coursesCardLink}>
                  <div className={styles.coursesCardContent}>
                    <p className={`${styles.coursesCardBadge} ${course.categoryClass}`}>
                      {course.badge}
                    </p>
                    <h3 className={styles.coursesCardTag}>
                      {course.isSplitTitle ? (
                        <>
                          <span>Product Management </span>
                          <span>Fundamentals</span>
                        </>
                      ) : (
                        course.title
                      )}
                    </h3>
                    <div className={styles.coursesCardInfo}>
                      <p className={styles.colorsDanger || styles.coursesCardPrice}>
                        {course.price}
                      </p>
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
        <Link to="/courses">
          <div className={styles.moreCoursesBox}>
            <p className={styles.moreCourses}>Do you want more courses?</p>
            <ButtonPrimary>View all courses</ButtonPrimary>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CheckOtherCourses;
