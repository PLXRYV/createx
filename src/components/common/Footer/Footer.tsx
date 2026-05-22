import React from 'react';
import CopyrightSection from "./components/Copyright/CopyrightSection.tsx";
import styles from './Footer.module.scss';
import logoSvg from '../../../assets/images/common/images/footer/logo.svg';
import facebookIcon from '../../../assets/images/common/images/footer/facebook.svg';
import twitterIcon from '../../../assets/images/common/images/footer/twitter.svg';
import youtubeIcon from '../../../assets/images/common/images/footer/youtube.svg';
import telegramIcon from '../../../assets/images/common/images/footer/telegram.svg';
import instagramIcon from '../../../assets/images/common/images/footer/instagram.svg';
import linkedInIcon from '../../../assets/images/common/images/footer/linked-In.svg';
import phoneIcon from '../../../assets/images/common/images/footer/phone.svg';
import mailIcon from '../../../assets/images/common/images/footer/mail.svg';

const Footer: React.FC = () => {
    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Newsletter form submitted");
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.footerBox}>
                        <div className={styles.footerLogoContainer}>
                            <img src={logoSvg} alt="Createx Online School Logo"/>
                        </div>
                        <p className={styles.footerBoxText}>
                            CreateX Online School is a leader in online studying. We have lots of courses and programs
                            from the main market experts. We provide relevant approaches to online learning, internships
                            and employment in the largest companies in the country.
                        </p>
                        <div className={styles.footerSocial}>
                            <a href="#" className={styles.footerInfoLink} aria-label="Facebook">
                                <img src={facebookIcon} alt="Facebook icon"/>
                            </a>
                            <a href="#" className={styles.footerInfoLink} aria-label="Twitter">
                                <img src={twitterIcon} alt="Twitter icon"/>
                            </a>
                            <a href="#" className={styles.footerInfoLink} aria-label="YouTube">
                                <img src={youtubeIcon} alt="YouTube icon"/>
                            </a>
                            <a href="#" className={styles.footerInfoLink} aria-label="Telegram">
                                <img src={telegramIcon} alt="Telegram icon"/>
                            </a>
                            <a href="#" className={styles.footerInfoLink} aria-label="Instagram">
                                <img src={instagramIcon} alt="Instagram icon"/>
                            </a>
                            <a href="#" className={styles.footerInfoLink} aria-label="LinkedIn">
                                <img src={linkedInIcon} alt="LinkedIn icon"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerNavigation}>
                        <div className={styles.footerNavigationSite}>

                            <ul className={styles.footerInfo}>
                                <li className={styles.footerInfoTitle}>
                                    <p>SITE MAP</p>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#about">About Us</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#courses">Courses</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#events">Events</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#blog">Blog</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#contacts">Contacts</a>
                                </li>
                            </ul>

                            <ul className={styles.footerInfo}>
                                <li className={styles.footerInfoTitle}>
                                    <p>COURSES</p>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#">Marketing</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#">Management</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#">HR & Recruiting</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#">Design</a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="#">Development</a>
                                </li>
                            </ul>

                            <ul className={styles.footerInfo}>
                                <li className={styles.footerInfoTitle}>
                                    <p>CONTACT US</p>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="tel:4055550128" className={styles.footerContactLink}>
                                        <img src={phoneIcon} alt="Phone icon"/>
                                        <span>(405) 555-0128</span>
                                    </a>
                                </li>
                                <li className={styles.footerInfoLink}>
                                    <a href="mailto:hello@createx.com" className={styles.footerContactLink}>
                                        <img src={mailIcon} alt="Mail icon"/>
                                        <span>hello@createx.com</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.footerBoxForm}>
                        <p className={styles.footerInfoTitle}>
                            SIGN UP TO OUR NEWSLETTER'S
                        </p>
                        <form onSubmit={handleNewsletterSubmit}>
                            <div className={styles.inputWrapper}>
                                <input type="email" placeholder="Email address" required />
                                <button type="submit" className={styles.submitBtn} aria-label="Subscribe to newsletter">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 4.52925C10.1223 4.2689 10.5444 4.2689 10.8047 4.52925L13.8047 7.52925C14.0651 7.7896 14.0651 8.21171 13.8047 8.47206L10.8047 11.4721C10.5444 11.7324 10.1223 11.7324 9.86193 11.4721C9.60158 11.2117 9.60158 10.7896 9.86193 10.5292L11.7239 8.66732H2.66667C2.29848 8.66732 2 8.36884 2 8.00065C2 7.63246 2.29848 7.33398 2.66667 7.33398H11.7239L9.86193 5.47206C9.60158 5.21171 9.60158 4.7896 9.86193 4.52925Z" fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <p className={styles.footerNewsletterText}>
                            *Subscribe to our newsletter to receive communications and early updates from CreateX SEO Agency.
                        </p>
                    </div>

                </div>
            </div>

            <CopyrightSection />
        </footer>
    );
};

export default Footer;
