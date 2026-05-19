import React from 'react';
import styles from './CourseMain.module.scss'; // Подключаем локальные CSS-модули

const CourseMain: React.FC = () => {
    return (
        // Главная обертка секции с фоном
        <section className={styles.courseBackground}>
            <div className="container"> {/* Глобальный класс пишем строкой */}

                <div className={styles.courseMainContent}>
                    {/* Текст категории курса (исправлен семантический тег) */}
                    <p className={styles.courseMainHeading}>Courses</p>

                    {/* Главный заголовок страницы курса */}
                    <h1 className={styles.courseMainTitle}>
                        User Experience. Principles of Human-Centered Design
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default CourseMain;
