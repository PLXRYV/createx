import React from 'react';
import styles from './Subscribe.module.scss';

// Импортируем декоративную SVG-иллюстрацию как модуль для Vite
import subscribeSvg from '../../../assets/images/common/images/subscribe/subscribe_illustration.svg';

const Subscribe: React.FC = () => {

    // Функция обработки отправки формы
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Сюда можно будет добавить сбор данных из инпута и отправку на бэкенд
        console.log("Subscribe form submitted");
    };

    return (
        <section id="contacts" className={styles.subscribeSection}>
            <div className={styles.subscribeContainer}>

                {/* Шапка секции (исправлена семантика тегов) */}
                <div className={styles.subscribeHeader}>
                    <p className={styles.subscribeHeaderSubtitle}>DON’T MISS ANYTHING</p>
                    <h2 className={styles.subscribeHeaderTitle}>
                        Subscribe to the Createx School announcements
                    </h2>
                </div>

                {/* Блок формы подписки */}
                <div className={styles.subscribeFormBox}>
                    <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                        <input
                            type="email"
                            placeholder="Your working email"
                            className={styles.subscribeInput}
                            required // Делает поле обязательным для заполнения
                        />
                        {/* Кнопка теперь внутри формы и имеет тип submit */}
                        <button type="submit" className={styles.buttonPrimary}>
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Декоративные фоновые изображения */}
            <img className={styles.subscribeImageFirst} src={subscribeSvg} alt="Subscribe decoration pattern"/>
            <img className={styles.subscribeImageSecond} src={subscribeSvg} alt="Subscribe decoration pattern"/>
        </section>
    );
};

export default Subscribe;
