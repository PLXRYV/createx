import {
  ImageDirectionsFifth,
  ImageDirectionsFirst,
  ImageDirectionsFourth,
  ImageDirectionsSecond,
  ImageDirectionsThird,
  MiniArrowRight,
} from '@assets/images/aboutDetails';
import styles from '@pages/AboutDetails/components/AboutDirections/AboutDirections.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const DIRECTIONS_DATA = [
  {
    id: 1,
    image: ImageDirectionsFirst,
    title: 'Marketing',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    category: 'marketing',
  },
  {
    id: 2,
    image: ImageDirectionsSecond,
    title: 'Management',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    category: 'management',
  },
  {
    id: 3,
    image: ImageDirectionsThird,
    title: 'HR & Recruiting',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    category: 'hr',
  },
  {
    id: 4,
    image: ImageDirectionsFourth,
    title: 'Design',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    category: 'design',
  },
  {
    id: 5,
    image: ImageDirectionsFifth,
    title: 'Development',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    category: 'development',
  },
];

const AboutDirections: React.FC = () => {
  return (
    <section className={styles.directionsSection}>
      <div className="container">
        <header className={styles.directionsHeader}>
          <h5 className={styles.directionsSubtitle}>our main directions</h5>
          <h2 className={styles.directionsTitle}>What do we teach</h2>
        </header>

        <div className={styles.directionsGrid}>
          {DIRECTIONS_DATA.map((dir) => (
            <div key={dir.id} className={styles.directionCard}>
              <figure className={styles.cardImageHolder}>
                <img src={dir.image} alt={dir.title} className={styles.cardImg} />
              </figure>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{dir.title}</h3>
                <p className={styles.cardText}>{dir.text}</p>
                <Link to={`/courses?category=${dir.category}`} className={styles.cardLink}>
                  <span>Check courses</span>
                  <MiniArrowRight />
                </Link>
              </div>
            </div>
          ))}

          <div className={styles.placeholderCard}>
            <p className={styles.placeholderText}>New studying program coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDirections;
