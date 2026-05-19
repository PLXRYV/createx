import { ReactNode } from 'react';
import styles from './Hero.module.scss';

// Импортируем кнопки из нашей новой папки UI (проверьте пути, если они лежат в другом месте)
import ButtonPrimary from '../../../../components/ui/ButtonPrimary/ButtonPrimary';


// Импорт SVG-картинок как модулей для сборщика Vite
import playIcon from '../../../../assets/images/homepage/main/main_play_video.svg';
import illustrationImg from '../../../../assets/images/homepage/main/illustration-main.svg';

interface HeroProps {
    // Если вы передаете какую-то специфическую кнопку снаружи, оставляем пропс, иначе его можно убрать
    additionalButton?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ additionalButton }) => {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className="container"> {/* Глобальный класс пишем просто строкой */}

                {/* Главный контент первого экрана */}
                <div className={styles.mainContent}>
                    <div className={styles.mainInfo}>

                        {/* Блок с видео-превью */}
                        <div className={styles.mainInfoVideo}>
                            <button type="button" className={styles.mainVideoButton} aria-label="Play showreel">
                                <img src={playIcon} alt="Play icon"/>
                            </button>
                            <p className={styles.mainVideoText}>Play showreel</p>
                        </div>

                        {/* Главный заголовок страницы (H1 должен быть один на странице) */}
                        <h1 className={styles.mainInfoTitle}>
                            Enjoy studying with Createx Online Courses
                        </h1>

                        {/* Кнопки действий */}
                        <div className={styles.mainInfoActions}>
                            <button className={`${styles.button} ${styles.buttonSecondary}`}>
                                About Us
                            </button>
                            <ButtonPrimary onClick={() => console.log("Explore courses clicked")}>
                                Explore courses
                            </ButtonPrimary>
                        </div>
                    </div>

                    {/* Правая иллюстрация */}
                    <div className={styles.mainIllustrationContainer}>
                        <img src={illustrationImg} className={styles.mainIllustration} alt="Courses learning illustration"/>
                    </div>
                </div>

                {/* Блок статистики (переписан на семантический список) */}
                <div className={styles.stats}>
                    <ul className={styles.statsItems}>
                        <li className={styles.statsItem}>
                            <span className={styles.statsItemNumber}>1200</span>
                            <span className={styles.statsItemText}>Students graduated</span>
                        </li >
                        <li className={styles.statsItemCircle}></li>

                        <li className={styles.statsItem}>
                            <span className={styles.statsItemNumber}>84</span>
                            <span className={styles.statsItemText}>Completed Courses</span>
                        </li>
                        <li className={styles.statsItemCircle}></li>

                        <li className={styles.statsItem}>
                            <span className={styles.statsItemNumber}>16</span>
                            <span className={styles.statsItemText}>Qualified tutors</span>
                        </li>
                        <li className={styles.statsItemCircle}></li>

                        <li className={styles.statsItem}>
                            <span className={styles.statsItemNumber}>5</span>
                            <span className={styles.statsItemText}>Years of experience</span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Hero;