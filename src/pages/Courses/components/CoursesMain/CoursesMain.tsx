import '@assets/style/style.scss';

import { ButtonSearch, Convert } from '@assets/images/courses';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary'; // Ваша кнопка
import React, { useEffect, useState } from 'react';

import CoursesGrid, { defaultCourses } from '../CoursesGrid/CoursesGrid';
import styles from './CoursesMain.module.scss';

const CoursesMain: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [visibleCount, setVisibleCount] = useState<number>(9);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory, searchQuery]);

  const countCourses = (category: string) => {
    if (category === 'all') return defaultCourses.length;
    return defaultCourses.filter((course) => course.category === category).length;
  };

  const filteredCourses = defaultCourses.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const coursesToDisplay = filteredCourses.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <main className={styles.coursesMainPage}>
      <div className="container">
        <header className={styles.titleMain}>
          <p className={styles.subtitle}>ENJOY YOUR STUDYING!</p>
          <h1 className={styles.mainHeading}>Our online courses</h1>
        </header>
        <div className={styles.navMainContainer}>
          <nav className={styles.navMain} aria-label="Courses filter">
            <ul className={styles.navMainList}>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'all' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All <span className={styles.navMainTag}>{countCourses('all')}</span>
                </button>
              </li>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'marketing' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('marketing')}
                >
                  Marketing <span className={styles.navMainTag}>{countCourses('marketing')}</span>
                </button>
              </li>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'management' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('management')}
                >
                  Management <span className={styles.navMainTag}>{countCourses('management')}</span>
                </button>
              </li>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'hr' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('hr')}
                >
                  HR & Recruiting <span className={styles.navMainTag}>{countCourses('hr')}</span>
                </button>
              </li>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'design' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('design')}
                >
                  Design <span className={styles.navMainTag}>{countCourses('design')}</span>
                </button>
              </li>
              <li className={styles.navMainButtonsList}>
                <button
                  className={`${styles.navMainButton} ${activeCategory === 'development' ? styles.navMainButtonActive : ''}`}
                  onClick={() => setActiveCategory('development')}
                >
                  Development{' '}
                  <span className={styles.navMainTag}>{countCourses('development')}</span>
                </button>
              </li>
            </ul>
            <div className={styles.coursesSortSearch}>
              <form
                className={styles.coursesSearchForm}
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className={styles.coursesSortSearchInput}
                  aria-label="Search event..."
                  id="filterInput"
                  type="search"
                  placeholder="Search course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className={styles.coursesSortSearchBtn}
                  type="submit"
                  aria-label="Submit search"
                >
                  <ButtonSearch />
                </button>
              </form>
            </div>
          </nav>
        </div>
        <CoursesGrid courses={coursesToDisplay} />
        {filteredCourses.length > visibleCount && (
          <div className={styles.loadMoreContainer}>
            <Convert />
            <button onClick={handleLoadMore} className={styles.coursesButtonLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CoursesMain;
