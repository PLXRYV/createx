import "/src/components/Main/main.scss";
import "/src/components/Main/main-stats.scss"
import buttonPrimaryMobile from "../ButtonPrimary/ButtonPrimaryMobile.jsx";
import buttonPrimary from "../ButtonPrimary/ButtonPrimary.jsx";

const Hero = ({ button, buttonPrimaryMobile, buttonPrimary }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__content}>
                    <div className={styles.main__info}>
                        <div className={styles.main__info-video}>
                            <button type="button" className={styles.main__video-button}>
                                <img src="/src/assets/images/main/main_play_video.svg" alt="play"/>
                            </button>
                            <p className={styles.main__video-text}>Play showreel</p>
                        </div>
                        <h1 className={styles.main__info-title}>
                            Enjoy studying with Createx Online Courses
                        </h1>
                        <div className={styles.main__info-actions}>
                            {/*{buttonPrimaryMobile}*/}
                            <button className={styles.button button__secondary}>About Us</button>
                            {button}
                        </div>
                    </div>
                    <div>
                        <img src="/src/assets/images/main/illustration-main.svg" data-svg-fill="false" alt="Courses image"/>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stats__items}>
                        <a href="#" className={styles.stats__item}>
                            <span className={styles.stats__item-number}>1200</span>
                            <span className={styles.stats__item-text}>Students graduated</span>
                        </a>
                        <div className={styles.stats__item--circle}></div>
                        <a href="#" className={styles.stats__item}>
                            <span className={styles.stats__item-number}>84</span>
                            <span className={styles.stats__item-text}>Completed Courses</span>
                        </a>
                        <div className={styles.stats__item--circle}></div>
                        <a href="#" className={styles.stats__item}>
                            <span className={styles.stats__item-number}>16</span>
                            <span className={styles.stats__item-text}>Qualified tutors</span>
                        </a>
                        <div className={styles.stats__item--circle}></div>
                        <a href="#" className={styles.stats__item}>
                            <span className={styles.stats__item-number}>5</span>
                            <span className={styles.stats__item-text}>Years of experience</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero;