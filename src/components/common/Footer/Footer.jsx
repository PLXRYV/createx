import './footer.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__box}>
                        <div>
                            <img src="/src/assets/images/footer/logo.svg" data-svg-fill="false" alt="Logo of site"/>
                        </div>
                        <p className={styles.footer__box-text}>
                            Createx Online School is a leader in online studying. We have lots of courses and programs
                            from the main market experts. We provide relevant approaches to online learning, internships
                            and employment in the largest companies in the country.
                        </p>
                        <div className={styles.footer__social}>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/facebook.svg" data-svg-fill="false" alt="image facebook"/>
                            </a>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/twitter.svg" data-svg-fill="false" alt="image twitter"/>
                            </a>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/youtube.svg" data-svg-fill="false" alt="image youtube"/>
                            </a>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/telegram.svg" data-svg-fill="false" alt="image telegram"/>
                            </a>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/instagram.svg" data-svg-fill="false" alt="image instagram"/>
                            </a>
                            <a href="#" className={styles.footer__info-link}>
                                <img src="/src/assets/images/footer/linked-In.svg" data-svg-fill="false" alt="image linked-In"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer__navigation}>
                        <div className={styles.footer__navigation-site}>
                            <ul className={styles.footer__info}>
                                <li className={styles.footer__info-title}>
                                    <p>SITE MAP</p>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#about">About Us</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#courses">Courses</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#events">Events</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#blog">Blog</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#contacts">Contacts</a>
                                </li>
                            </ul>
                            <ul className={styles.footer__info}>
                                <li className={styles.footer__info-title}>
                                    <p>COURSES</p>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#">Marketing</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#">Management</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#">HR & Recruting</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#">Design</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#">Development</a>
                                </li>
                            </ul>
                            <ul className={styles.footer__info}>
                                <li className={styles.footer__info-title}>
                                    <p>CONTACT US</p>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#"><img src="/src/assets/images/footer/phone.svg" alt="image phone"/>
                                        (405) 555-0128</a>
                                </li>
                                <li className={styles.footer__info-link}>
                                    <a href="#"><img src="/src/assets/images/footer/mail.svg" alt="image mail"/>
                                        hello@createx.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__box-form}>
                        <p className={styles.footer__info-title}>
                            SIGN UP TO OUR NEWSLETTER
                        </p>
                        <form action="#">
                            <div className={styles.input-wrapper}>
                                <input placeholder="Email address"/>
                                <button className={styles.submit-btn}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M9.86193 4.52925C10.1223 4.2689 10.5444 4.2689 10.8047 4.52925L13.8047 7.52925C14.0651 7.7896 14.0651 8.21171 13.8047 8.47206L10.8047 11.4721C10.5444 11.7324 10.1223 11.7324 9.86193 11.4721C9.60158 11.2117 9.60158 10.7896 9.86193 10.5292L11.7239 8.66732H2.66667C2.29848 8.66732 2 8.36884 2 8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398H11.7239L9.86193 5.47206C9.60158 5.21171 9.60158 4.7896 9.86193 4.52925Z"
                                              fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <p className={styles.footer__newsletter-text}>
                            *Subscribe to our newsletter to receive communications and early updates from Createx SEO
                            Agency.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;