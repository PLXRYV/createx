import '@assets/style/style.scss';

import CardBrooklynSimmons from '@assets/images/courses/CardBrooklynSimmons.jpg';
import CardCodyFisher from '@assets/images/courses/CardCodyFisher.jpg';
import CardDianneRussell from '@assets/images/courses/CardDianneRussell.jpg';
import CardGuyHawkins from '@assets/images/courses/CardGuyHawkins.jpg';
import CardJeromeBell from '@assets/images/courses/CardJeromeBell.jpg';
import CardKathrynMurphy from '@assets/images/courses/CardKathrynMurphy.jpg';
import CardKristinWatson from '@assets/images/courses/CardKristinWatson.jpg';
import CardLeslieAlexanderLi from '@assets/images/courses/CardLeslieAlexanderLi.jpg';
import CardMarvinMcKinney from '@assets/images/courses/CardMarvinMcKinney.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CoursesGrid.module.scss';

export interface Course {
  id: number;
  image: string;
  badge: string;
  category: 'marketing' | 'management' | 'hr' | 'design' | 'development';
  title: string;
  price: string;
  speaker: string;
}

interface CoursesGridProps {
  courses?: Course[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  const displayCourses = courses !== undefined ? courses : defaultCourses;
  if (displayCourses.length === 0) {
    return <div className={styles.noCourses}>No courses found matching your criteria.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.coursesContent}>
        {displayCourses.map((course) => (
          <article key={course.id} className={styles.coursesContainerCard}>
            <img
              className={styles.coursesContentImg}
              src={course.image}
              alt={`Course ${course.title}`}
            />
            <div className={styles.coursesContentCard}>
              <Link to={`/courses/${course.id}`} className={styles.coursesCardLink}>
                <div className={styles.coursesCardContent}>
                  <p className={`${styles.coursesCardBadge} ${styles[course.category]}`}>
                    {course.badge}
                  </p>
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
          </article>
        ))}
      </div>
    </div>
  );
};

export const defaultCourses: Course[] = [
  {
    id: 1,
    image: CardJeromeBell,
    badge: 'Marketing',
    category: 'marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '$100',
    speaker: 'Jerome Bell',
  },
  {
    id: 2,
    image: CardMarvinMcKinney,
    badge: 'Management',
    category: 'management',
    title: 'Product Management Fundamentals',
    price: '$480',
    speaker: 'Marvin McKinney',
  },
  {
    id: 3,
    image: CardLeslieAlexanderLi,
    badge: 'HR & Recruiting',
    category: 'hr',
    title: 'HR Management and Analytics',
    price: '$200',
    speaker: 'Leslie Alexander Li',
  },
  {
    id: 4,
    image: CardKristinWatson,
    badge: 'Marketing',
    category: 'marketing',
    title: 'Brand Management & PR Communications',
    price: '$530',
    speaker: 'Kristin Watson',
  },
  {
    id: 5,
    image: CardGuyHawkins,
    badge: 'Design',
    category: 'design',
    title: 'Graphic Design Basic',
    price: '$500',
    speaker: 'Guy Hawkins',
  },
  {
    id: 6,
    image: CardDianneRussell,
    badge: 'Management',
    category: 'management',
    title: 'Business Development Management',
    price: '$400',
    speaker: 'Dianne Russell',
  },
  {
    id: 7,
    image: CardBrooklynSimmons,
    badge: 'Development',
    category: 'development',
    title: 'Highload Software Architecture',
    price: '$600',
    speaker: 'Brooklyn Simmons',
  },
  {
    id: 8,
    image: CardKathrynMurphy,
    badge: 'HR & Recruiting',
    category: 'hr',
    title: 'Human Resources – Selection and Recruitment',
    price: '$150',
    speaker: 'Kathryn Murphy',
  },
  {
    id: 9,
    image: CardCodyFisher,
    badge: 'Design',
    category: 'design',
    title: 'User Experience. Human-centered Design',
    price: '$240',
    speaker: 'Cody Fisher',
  },
];

const sampleImages = [
  CardJeromeBell,
  CardMarvinMcKinney,
  CardLeslieAlexanderLi,
  CardKristinWatson,
  CardDianneRussell,
  CardGuyHawkins,
  CardBrooklynSimmons,
  CardCodyFisher,
  CardKathrynMurphy,
];
const categories: ('marketing' | 'management' | 'hr' | 'design' | 'development')[] = [
  'marketing',
  'management',
  'hr',
  'design',
  'development',
];
const badges = ['Marketing', 'Management', 'HR & Recruiting', 'Design', 'Development'];
for (let i = 10; i <= 18; i++) {
  const categoryIndex = i % categories.length;
  defaultCourses.push({
    id: i,
    image: sampleImages[i % sampleImages.length],
    badge: badges[categoryIndex],
    category: categories[categoryIndex],
    title: `Generated Premium Course Vol. ${i - 9} for Professionals`,
    price: `$${150 + i * 15}`,
    speaker: `Expert Speaker №${i}`,
  });
}

export default CoursesGrid;
