import styles from './About.module.scss';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <img className={styles.dotsImage} src="/src/assets/images/about/dots.svg" data-svg-fill="false" alt="dots image"/>
            <div className={styles.container}>
                <div className={styles.aboutBox}>
                    <div>
                        <img className={styles.aboutImg} src="/src/assets/images/about/about_image.jpg" alt="About us image"/>
                    </div>
                    <div className={styles.aboutInner}>
                        <h4 className={styles.aboutInnerSubtitle}>WHO WE ARE</h4>
                        <h6 className={styles.aboutInnerTitle}>Why Createx?</h6>
                        <div className={styles.aboutInfo}>
                            <ul className={`${styles.aboutText} ${styles.aboutList}`}>
                                <li className={`${styles.aboutInfoText} ${styles.aboutListItem}`}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p className={styles.aboutListItemText}>A fermentum in morbi pretium aliquam
                                        adipiscing donec tempus.</p>
                                </li>
                                <li className={styles.aboutInfoText}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p className={styles.aboutListItemText}>Vulputate placerat amet pulvinar lorem
                                        nisl.</p>
                                </li>
                                <li className={styles.aboutInfoText}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                                </li>
                                <li className={styles.aboutInfoText}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                                </li>
                                <li className={styles.aboutInfoText}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p>Tincidunt sagittis neque sem ac eget.</p>
                                </li>
                                <li className={styles.aboutInfoText}>
                                    <img className={styles.aboutListItemIcon} src="/src/assets/images/icons/check.svg" alt="Check icon svg"/>
                                    <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                                </li>
                            </ul>
                        </div>
                        <button className={styles.buttonPrimary}>More about us</button>
                    </div>
                </div>
            </div>
            <div className={styles.circlesImageContainer}>
                <img className={styles.circlesImage} src="/src/assets/images/about/circles.svg" data-svg-fill="false" alt="circles image"/>
            </div>
        </section>
    )
}

export default About;