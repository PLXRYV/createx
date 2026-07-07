import {
  ButtonArrowRight,
  ButtonSearch,
  ButtonTriangleDown,
  ButtonTriangleUp,
  VisualGridBtn,
  VisualListBtn,
} from '@assets/images/events';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Event.module.scss';

export interface EventItem {
  id: number;
  day: string;
  month: string;
  time: string;
  title: string;
  category: 'Online lecture' | 'Online workshop' | 'Online master-class';
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    day: '05',
    month: 'August',
    time: '11:00 - 14:00',
    title: 'Formation of the organizational structure of the company in the face of uncertainty.',
    category: 'Online master-class',
  },
  {
    id: 2,
    day: '24',
    month: 'July',
    time: '11:00 - 12:30',
    title: 'Building a customer service department. Best Practices.',
    category: 'Online lecture',
  },
  {
    id: 3,
    day: '16',
    month: 'July',
    time: '10:00 - 13:00',
    title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    category: 'Online workshop',
  },
  {
    id: 4,
    day: '10',
    month: 'July',
    time: '9:00 - 14:00',
    title: 'Find and evaluate: search and assessment tools for candidates.',
    category: 'Online workshop',
  },
  {
    id: 5,
    day: '27',
    month: 'June',
    time: '15:00 - 19:00',
    title: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
    category: 'Online master-class',
  },
  {
    id: 6,
    day: '15',
    month: 'June',
    time: '10:00 - 12:00',
    title: 'Marketing or growth hacking: main differences and what business needs.',
    category: 'Online lecture',
  },
  {
    id: 7,
    day: '02',
    month: 'June',
    time: '11:00 - 13:00',
    title: 'How to brief a client and present your design to approve it from the first show.',
    category: 'Online lecture',
  },
  {
    id: 8,
    day: '29',
    month: 'May',
    time: '11:00 - 12:00',
    title: 'Who is a project manager and do I want to be PM?',
    category: 'Online lecture',
  },
  {
    id: 9,
    day: '18',
    month: 'May',
    time: '10:00 - 12:00',
    title:
      "The company's business page as an additional tool to support the announcement of vacancies.",
    category: 'Online lecture',
  },
];

const categories: ('Online lecture' | 'Online workshop' | 'Online master-class')[] = [
  'Online lecture',
  'Online workshop',
  'Online master-class',
];

const months = ['July', 'August'];

for (let i = 10; i <= 30; i++) {
  const categoryIndex = i % categories.length;
  const monthIndex = i % months.length;
  const generatedDay = String(((i * 3) % 28) + (i % 2) + 1).padStart(2, '0');

  EVENTS_DATA.push({
    id: i,
    day: generatedDay,
    month: months[monthIndex],
    time: `${10 + (i % 4)}:00 - ${12 + (i % 5)}:30`,
    title: `Premium Event Vol. ${i - 5}: Advanced Strategies and Methods for Industry Professionals.`,
    category: categories[categoryIndex],
  });
}

const EventsRoad: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [eventsPerPage, setEventsPerPage] = useState<number>(9);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortOrder, eventsPerPage]);

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const monthsMap: { [key: string]: number } = { May: 5, June: 6, July: 7, August: 8 };
    const dateA = (monthsMap[a.month] || 0) * 100 + parseInt(a.day, 10);
    const dateB = (monthsMap[b.month] || 0) * 100 + parseInt(b.day, 10);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage) || 1;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);

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
              <select
                id="sortCategory"
                name="select"
                className={styles.eventsSortSelect}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">all themes</option>
                <option value="Online lecture">online lecture</option>
                <option value="Online workshop">online workshop</option>
                <option value="Online master-class">online master-class</option>
              </select>
            </div>

            <div className={styles.eventsSortItem}>
              <p className={styles.eventsSortTitle}>Sort by</p>
              <select
                id="sortOrder"
                name="select"
                className={styles.eventsSortSelect}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">newest</option>
                <option value="desc">oldest</option>
              </select>
            </div>

            <div className={styles.eventsSortItem}>
              <span className={styles.eventsSortTitle}>Show</span>
              <div className={styles.eventsSortValue}>
                <span className={styles.value}>{eventsPerPage}</span>
                <div className={styles.eventsSortBtnGroup}>
                  <button
                    type="button"
                    className={styles.eventsSortBtnPlus}
                    onClick={() => setEventsPerPage((p) => Math.min(p + 1, 20))}
                  >
                    <ButtonTriangleUp />
                  </button>
                  <button
                    type="button"
                    className={styles.eventsSortBtnMin}
                    onClick={() => setEventsPerPage((p) => Math.max(p - 1, 1))}
                  >
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

          <ul
            className={`${styles.eventsNavigation} ${viewMode === 'grid' ? styles.gridMode : styles.listMode}`}
          >
            {currentEvents.length === 0 ? (
              <div className={styles.noEvents}>No events found matching your criteria.</div>
            ) : (
              currentEvents.map((event) => (
                <li key={event.id} className={styles.eventCard}>
                  <div className={styles.eventDateBlock}>
                    <span className={styles.eventDay}>{event.day}</span>
                    <div className={styles.eventMonthTime}>
                      <span className={styles.eventMonth}>{event.month}</span>
                      <span className={styles.eventTime}>{event.time}</span>
                    </div>
                  </div>

                  <div className={styles.eventInfoBlock}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventCategory}>{event.category}</p>
                  </div>

                  <Link to={`/events/${event.id}`} className={styles.eventBtnLink}>
                    View more
                  </Link>
                </li>
              ))
            )}
          </ul>
          <div className={styles.eventsPagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`${styles.eventsPaginationPage} ${currentPage === page ? styles.isActive : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className={styles.eventsPaginationPage}
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              <ButtonArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsRoad;
