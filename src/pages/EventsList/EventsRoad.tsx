import {
  ButtonArrowRight,
  ButtonSearch,
  ButtonTriangleDown,
  ButtonTriangleUp,
  VisualGridBtn,
  VisualListBtn,
} from '@assets/images/events';
import React, { useState } from 'react';

import styles from './Event.module.scss';

const EventsRoad: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <section id="events" className={styles.eventsSection}>
      <div className="container">
        <div className={styles.eventsContainer}>
          <div className={styles.eventsHeader}>
            <h6 className={styles.eventsHeaderTtext}>
              <span>OUR EVENTS</span>
              Lectures, workshops & master-classes
            </h6>
          </div>

          <div className={styles.eventsSort}>
            <div className={styles.eventsSortItem}>
              <p className={styles.eventsSortTitle}>Event category</p>
              <select id="sortCategory" name="select" className={styles.eventsSortSelect}>
                <option value="all">all themes</option>
                <option value="Online lecture">online lecture</option>
                <option value="Online workshop">online workshop</option>
                <option value="Online master-class">online master-class</option>
              </select>
            </div>

            <div className={styles.eventsSortItem}>
              <p className={styles.eventsSortTitle}>Sort by</p>
              <select id="sortOrder" name="select" className={styles.eventsSortSelect}>
                <option value="asc">newest</option>
                <option value="desc">oldest</option>
              </select>
            </div>

            <div className={styles.eventsSortItem}>
              <span className={styles.eventsSortTitle}>Show</span>
              <div className={styles.eventsSortValue}>
                <span className={styles.value}>9</span>
                <div className={styles.eventsSortBtnGroup}>
                  <button type="button" className={styles.eventsSortBtnPlus}>
                    <ButtonTriangleUp />
                  </button>
                  <button type="button" className={styles.eventsSortBtnMin}>
                    <ButtonTriangleDown />
                  </button>
                </div>
              </div>
              <span className={styles.eventsSortDescription}>events per page</span>
            </div>

            <div className={styles.eventsSortSearch}>
              <form
                className={styles.eventsSortSearchForm}
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className={styles.eventsSortSearchInput}
                  aria-label="Search event..."
                  id="filterInput"
                  type="search"
                  placeholder="Search event..."
                />
                <button className={styles.eventsSortSearchBtn} type="submit">
                  <ButtonSearch />
                </button>
              </form>
            </div>

            <div className={styles.eventsSortVisual}>
              <button
                type="button"
                className={`${styles.eventsSortVisualBtn} ${viewMode === 'list' ? styles.isActive : ''}`}
                onClick={() => setViewMode('list')}
              >
                <VisualListBtn />
              </button>
              <button
                type="button"
                className={`${styles.eventsSortVisualBtn} ${viewMode === 'grid' ? styles.isActive : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <VisualGridBtn />
              </button>
            </div>
          </div>

          <ul className={styles.eventsNavigation}></ul>

          <div className={styles.eventsPagination}>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                type="button"
                className={`${styles.eventsPaginationPage} ${currentPage === page ? styles.isActive : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button type="button" className={styles.eventsPaginationPage} aria-label="Next page">
              <ButtonArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsRoad;
