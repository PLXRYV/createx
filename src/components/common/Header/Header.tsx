import { Logo, Profile } from '@assets/images/common/header';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ModalSignIn from '../Modal/ModalSignIn/ModalSignIn';
import ModalSignUp from '../Modal/ModalSignUp/ModalSignUp';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

interface HeaderProps {
  button?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

  return (
    <header id="header" className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerMenu}>
            <Link to="/" className={styles.logo}>
              <Logo className={styles.logoImg} />
            </Link>
            <nav className={styles.nav}>
              <ul className={`${styles.navMenu} ${isBurgerOpen ? styles.navMenuOpen : ''}`}>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link
                    to="/courses"
                    className={styles.navMenuLink}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>
                    Events
                  </Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navMenuItem}>
                  <Link className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerInfoActions}>
            <ButtonPrimary />
            <div className={styles.headerAuth}>
              <button
                type="button"
                onClick={() => setIsSignInOpen(true)}
                className={`${styles.headerAuthBtn} ${styles.headerAuthBtnSignin}`}
              >
                <Profile className={styles.headerAuthIcon} />
                <span>Sign in</span>
              </button>
              <span className={styles.headerAuthSeparator}>/</span>
              <button
                type="button"
                onClick={() => setIsSignUpOpen(true)}
                className={`${styles.headerAuthBtn} ${styles.headerAuthBtnSignup}`}
              >
                Sign up
              </button>
            </div>
            <BurgerMenu isOpen={isBurgerOpen} onToggle={toggleBurger} />
          </div>
        </div>
      </div>
      {isSignInOpen && <ModalSignIn onClose={() => setIsSignInOpen(false)} />}
      {isSignUpOpen && <ModalSignUp onClose={() => setIsSignUpOpen(false)} />}
    </header>
  );
};

export default Header;
