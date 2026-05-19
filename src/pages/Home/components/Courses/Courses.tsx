import React from 'react';
//import { Link } from 'react-router-dom'; // Подключаем для будущего роутинга вместо <a href="#">
import styles from './Courses.module.scss';

// Импортируем картинки как модули для Vite
import courseImg1 from '../../../../assets/images/homepage/courses/course-1.jpg';
import courseImg2 from '../../../../assets/images/homepage/courses/course-2.jpg';
import courseImg3 from '../../../../assets/images/homepage/courses/course-3.jpg';
import courseImg4 from '../../../../assets/images/homepage/courses/course-4.jpg';
import courseImg5 from '../../../../assets/images/homepage/courses/course-5.jpg';
import courseImg6 from '../../../../assets/images/homepage/courses/course-6.jpg';

const Courses: React.FC = () => {
    return (
        <section id="courses" className={styles.coursesSection}>
            <div className="container"> {/* Глобальный класс пишем строкой */}

                {/* Шапка секции */}
                <div className={styles.coursesContainHeader}>
                    <div className={styles.coursesHeader}>
                        <h6 className={styles.coursesHeaderTtitle}>
                            <span>READY TO LEARN?</span>
                            Featured Courses
                        </h6>
                    </div>
                    {/* Переписали класс кнопки в camelCase */}
                    <button className={styles.buttonSecondary}>View all courses</button>
                </div>

                {/* Сетка с карточками */}
                <div className={styles.coursesContent}>

                    {/* Карточка 1 */}
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg1} alt="Course Ads Training"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>Marketing</p>
                                    <h3 className={styles.coursesCardTag}>
                                        The Ultimate Google Ads Training Course
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$200</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Jerome Bell</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Карточка 2 */}
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg2} alt="Course Product Management"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>Management</p>
                                    <h3 className={styles.coursesCardTag}>
                                        <span>Product Management </span>
                                        <span>Fundamentals</span>
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$480</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Marvin McKinney</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Карточка 3 */}
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg3} alt="Course HR Management"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>HR & Recruiting</p>
                                    <h3 className={styles.coursesCardTag}>
                                        HR Management and Analytics
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$200</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Leslie Alexander Li</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg4} alt="Course Brand Management"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>Marketing</p>
                                    <h3 className={styles.coursesCardTag}>
                                        Brand Management & PR Communications
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$530</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Kristin Watson</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Карточка 5 */}
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg5} alt="Course Business Development"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>Management</p>
                                    <h3 className={styles.coursesCardTag}>
                                        <span>Business Development </span>
                                        <span>Management</span>
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$400</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Dianne Russell</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Карточка 6 */}
                    <div className={styles.coursesContainerCard}>
                        <img className={styles.coursesContentImg} src={courseImg6} alt="Course Graphic Design"/>
                        <div className={styles.coursesContentCard}>
                            <a href="#" className={styles.coursesCardLink}>
                                <div className={styles.coursesCardContent}>
                                    <p className={styles.coursesCardBadge}>Design</p>
                                    <h3 className={styles.coursesCardTag}>
                                        Graphic Design Basic
                                    </h3>
                                    <div className={styles.coursesCardInfo}>
                                        <p className={styles.coursesCardPrice}>$500</p>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <p className={styles.coursesCardSpeaker}>by Guy Hawkins</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> {/* Конец сетки coursesContent */}
            </div> {/* Конец глобального container */}
        </section>
    );
};

export default Courses;