import React, { useState } from 'react';
import styles from './Event.module.scss';

// Импортируем все SVG-иконки как модули для Vite
import triangleUpIcon from '../../assets/images/homepage/events/buttonTriangleUp.svg';
import triangleDownIcon from '../../assets/images/homepage/events/buttonTriangleDown.svg';
import searchIcon from '../../assets/images/homepage/events/buttonSearch.svg';
import visualListIcon from '../../assets/images/homepage/events/visualListBtn.svg';
import visualGridIcon from '../../assets/images/homepage/events/visualGridBtn.svg';
import arrowRightIcon from '../../assets/images/homepage/events/buttonArrowRight.svg';

const EventsRoad: React.FC = () => {
    // Стейт для переключения отображения: 'list' (список) или 'grid' (плитка)
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    // Стейт для текущей страницы пагинации
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <section id="events" className={styles.eventsSection}>
            <div className="container"> {/* Глобальный класс пишем строкой */}
                <div className={styles.eventsContainer}>

                    {/* Заголовок секции */}
                    <div className={styles.eventsHeader}>
                        <h6 className={styles.eventsHeaderTtext}>
                            <span>OUR EVENTS</span>
                            Lectures, workshops & master-classes
                        </h6>
                    </div>

                    {/* Панель фильтров и сортировки */}
                    <div className={styles.eventsSort}>

                        {/* Категории */}
                        <div className={styles.eventsSortItem}>
                            <p className={styles.eventsSortTitle}>Event category</p>
                            <select id="sortCategory" name="select" className={styles.eventsSortSelect}>
                                <option value="all">all themes</option>
                                <option value="Online lecture">online lecture</option>
                                <option value="Online workshop">online workshop</option>
                                <option value="Online master-class">online master-class</option>
                            </select>
                        </div>

                        {/* Сортировка */}
                        <div className={styles.eventsSortItem}>
                            <p className={styles.eventsSortTitle}>Sort by</p>
                            <select id="sortOrder" name="select" className={styles.eventsSortSelect}>
                                <option value="asc">newest</option>
                                <option value="desc">oldest</option>
                            </select>
                        </div>

                        {/* Количество на странице */}
                        <div className={styles.eventsSortItem}>
                            <span className={styles.eventsSortTitle}>Show</span>
                            <div className={styles.eventsSortValue}>
                                <span className={styles.value}>9</span>
                                <div className={styles.eventsSortBtnGroup}>
                                    <button type="button" className={styles.eventsSortBtnPlus}>
                                        <img src={triangleUpIcon} alt="Increase count"/>
                                    </button>
                                    <button type="button" className={styles.eventsSortBtnMin}>
                                        <img src={triangleDownIcon} alt="Decrease count"/>
                                    </button>
                                </div>
                            </div>
                            <span className={styles.eventsSortDescription}>events per page</span>
                        </div>

                        {/* Поиск */}
                        <div className={styles.eventsSortSearch}>
                            <form className={styles.eventsSortSearchForm} role="search" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className={styles.eventsSortSearchInput}
                                    aria-label="Search event..."
                                    id="filterInput"
                                    type="search"
                                    placeholder="Search event..."
                                />
                                <button className={styles.eventsSortSearchBtn} type="submit">
                                    <img src={searchIcon} alt="Search icon"/>
                                </button>
                            </form>
                        </div>

                        {/* Переключение вида отображения (Интерактивные табы) */}
                        <div className={styles.eventsSortVisual}>
                            <button
                                type="button"
                                className={`${styles.eventsSortVisualBtn} ${viewMode === 'list' ? styles.isActive : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                <img src={visualListIcon} alt="List view"/>
                            </button>
                            <button
                                type="button"
                                className={`${styles.eventsSortVisualBtn} ${viewMode === 'grid' ? styles.isActive : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <img src={visualGridIcon} alt="Grid view"/>
                            </button>
                        </div>

                    </div>

                    {/* Сюда будут рендериться сами карточки мероприятий */}
                    <ul className={styles.eventsNavigation}>
                        {/* Карточки мероприятий будут здесь */}
                    </ul>

                    {/* Интерактивная Пагинация */}
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
                            <img src={arrowRightIcon} alt="Arrow next"/>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventsRoad;
