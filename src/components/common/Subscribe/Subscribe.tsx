import React from 'react';
import styles from './Subscribe.module.scss';
import subscribeSvg from '../../../assets/images/common/images/subscribe/subscribe_illustration.svg';

const Subscribe: React.FC = () => {
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Subscribe form submitted");
    };

    return (
        <section id="contacts" className={styles.subscribeSection}>
            <div className={styles.subscribeContainer}>
                <div className={styles.subscribeHeader}>
                    <p className={styles.subscribeHeaderSubtitle}>DON’T MISS ANYTHING</p>
                    <h2 className={styles.subscribeHeaderTitle}>
                        Subscribe to the CreateX School announcements
                    </h2>
                </div>
                <div className={styles.subscribeFormBox}>
                    <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                        <input
                            type="email"
                            placeholder="Your working email"
                            className={styles.subscribeInput}
                            required
                        />
                        <button type="submit" className={styles.buttonPrimary}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <img className={styles.subscribeImageFirst} src={subscribeSvg} alt="Subscribe decoration pattern"/>
            <img className={styles.subscribeImageSecond} src={subscribeSvg} alt="Subscribe decoration pattern"/>
        </section>
    );
};

export default Subscribe;
