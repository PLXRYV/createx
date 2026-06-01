import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoSvg,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@assets/images/common/footer';
import React from 'react';
import { Link } from 'react-router-dom';

import CopyrightSection from './components/Copyright/CopyrightSection';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter form submitted');
  };

  return (
    <div>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContainer}>
            <div className={styles.footerBox}>
              <div className={styles.footerLogoContainer}>
                <LogoSvg />
              </div>
              <p className={styles.footerBoxText}>
                CreateX Online School is a leader in online studying. We have lots of courses and
                programs from the main market experts. We provide relevant approaches to online
                learning, internships and employment in the largest companies in the country.
              </p>
              <div className={styles.footerSocial}>
                <a href="#" className={styles.footerInfoLink} aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className={styles.footerInfoLink} aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a href="#" className={styles.footerInfoLink} aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="#" className={styles.footerInfoLink} aria-label="Telegram">
                  <TelegramIcon />
                </a>
                <a href="#" className={styles.footerInfoLink} aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className={styles.footerInfoLink} aria-label="LinkedIn">
                  <LinkedInIcon />
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
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/events">Events</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </ul>
                <ul className={styles.footerInfo}>
                  <li className={styles.footerInfoTitle}>
                    <p>COURSES</p>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">Marketing</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">Management</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">HR & Recruiting</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">Design</Link>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <Link to="/courses">Development</Link>
                  </li>
                </ul>
                <ul className={styles.footerInfo}>
                  <li className={styles.footerInfoTitle}>
                    <p>CONTACT US</p>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <a href="tel:4055550128" className={styles.footerContactLink}>
                      <PhoneIcon />
                      <span>(405) 555-0128</span>
                    </a>
                  </li>
                  <li className={styles.footerInfoLink}>
                    <a href="mailto:hello@createx.com" className={styles.footerContactLink}>
                      <MailIcon />
                      <span>hello@createx.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.footerBoxForm}>
              <p className={styles.footerInfoTitle}>SIGN UP TO OUR NEWSLETTER'S</p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className={styles.inputWrapper}>
                  <input type="email" placeholder="Email address" required />
                  <button
                    type="submit"
                    className={styles.footerSubmitButton}
                    aria-label="Subscribe"
                  >
                    <ArrowRight className={styles.submitBtn} />
                  </button>
                </div>
              </form>
              <p className={styles.footerNewsletterText}>
                *Subscribe to our newsletter to receive communications and early updates from
                CreateX SEO Agency.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <CopyrightSection />
    </div>
  );
};

export default Footer;
