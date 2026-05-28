import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  LinkedIn,
  TeamImageFirst,
  TeamImageFourth,
  TeamImageSecond,
  TeamImageThird,
} from '@assets/images/common/team';
import TestimonialsSection from '@components/common/TestimonialsSection/TestimonialsSection';
import React, { useEffect, useRef, useState } from 'react';

import styles from './Team.module.scss';

const TUTORS_DATA = [
  { id: 1, name: 'Dianne Russell', role: 'Founder and CEO', img: TeamImageFirst },
  { id: 2, name: 'Jerome Bell', role: 'Founder and Program Director', img: TeamImageSecond },
  {
    id: 3,
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',
    img: TeamImageThird,
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    img: TeamImageFourth,
  },
  {
    id: 5,
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    img: TeamImageFourth,
  },
  {
    id: 6,
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
    img: TeamImageFourth,
  },
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(4);
  const listRef = useRef<HTMLDivElement>(null);

  const totalItems = TUTORS_DATA.length;
  const gap = 20;
  const updateItemsPerView = () => {
    if (!listRef.current || !listRef.current.parentElement) return;

    const containerWidth = listRef.current.parentElement.offsetWidth;
    const firstItem = listRef.current.firstElementChild as HTMLElement;
    const itemWidth = firstItem ? firstItem.offsetWidth : 300;

    let calculatedViews = Math.floor(containerWidth / itemWidth);
    calculatedViews = Math.max(1, Math.min(4, calculatedViews));

    setItemsPerView(calculatedViews);
  };

  useEffect(() => {
    updateItemsPerView();

    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getTranslateX = () => {
    if (!listRef.current) return 0;
    const firstItem = listRef.current.firstElementChild as HTMLElement;
    const itemWidth = firstItem ? firstItem.offsetWidth : 300;
    return -(safeIndex * (itemWidth + gap));
  };

  return (
    <section className={styles.teamAndTestimonials}>
      <div className="container">
        <div className={styles.teamContainer}>
          <div className={styles.teamHeader}>
            <div className={styles.teamHeaderTitleBox}>
              <p className={styles.teamHeaderSubtitle}>BEST TUTORS ARE ALL HERE</p>
              <h2 className={styles.teamHeaderTitle}>Meet our team</h2>
            </div>

            <div className={styles.teamArrows}>
              <button
                type="button"
                className={styles.teamArrowLeft}
                onClick={prevSlide}
                disabled={safeIndex === 0}
                aria-label="Previous tutors"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className={styles.teamArrowRight}
                onClick={nextSlide}
                disabled={safeIndex >= maxIndex}
                aria-label="Next tutors"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.teamNavigation}>
            <div
              ref={listRef}
              className={styles.teamNavigationList}
              style={{ transform: `translateX(${getTranslateX()}px)` }}
            >
              {TUTORS_DATA.map((tutor) => (
                <div key={tutor.id} className={styles.teamNavigationItem}>
                  <div className={styles.teamNavigationItemImages}>
                    <img className={styles.teamImage} src={tutor.img} alt={tutor.name} />

                    <div className={styles.teamSocialOverlay}>
                      <a href="#" className={styles.teamSocialLink}>
                        <Facebook className={styles.teamSocial} />
                      </a>
                      <a href="#" className={styles.teamSocialLink}>
                        <Instagram className={styles.teamSocial} />
                      </a>
                      <a href="#" className={styles.teamSocialLink}>
                        <LinkedIn className={styles.teamSocial} />
                      </a>
                    </div>
                  </div>
                  <p className={styles.teamImageCaption}>
                    <span>{tutor.name}</span>
                    {tutor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </section>
  );
};

export default TeamSection;
