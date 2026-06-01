import { Logo, Profile } from '@assets/images/common/header';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ModalSignIn from '../Modal/ModalSignIn/ModalSignIn';
import ModalSignUp from '../Modal/ModalSignUp/ModalSignUp';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

interface HeaderProps {
  button?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsBurgerOpen(false);
    }
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navMenuLink} ${isActive ? styles.navMenuLinkActive : ''}`;

  return (
    <header id="header" className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerMenu}>
            <Link to="/" className={styles.logo}>
              <Logo className={styles.logoImg} />
            </Link>
            <nav
              className={`${styles.nav} ${isBurgerOpen ? styles.navOpen : ''}`}
              onClick={handleOverlayClick}
            >
              <ul className={`${styles.navMenu} ${isBurgerOpen ? styles.navMenuOpen : ''}`}>
                <li className={styles.navMenuItem}>
                  <NavLink
                    to="/about"
                    className={getNavLinkClass}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className={styles.navMenuItem}>
                  <NavLink
                    to="/courses"
                    className={getNavLinkClass}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className={styles.navMenuItem}>
                  <NavLink
                    to="/events"
                    className={getNavLinkClass}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    Events
                  </NavLink>
                </li>
                <li className={styles.navMenuItem}>
                  <NavLink
                    to="/blog"
                    className={getNavLinkClass}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className={styles.navMenuItem}>
                  <NavLink
                    to="/contacts"
                    className={getNavLinkClass}
                    onClick={() => setIsBurgerOpen(false)}
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerInfoActions}>
            <ButtonPrimary className={styles.headerGetBtn}> Get Consultation </ButtonPrimary>
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

      {isSignInOpen && (
        <ModalSignIn
          onClose={() => setIsSignInOpen(false)}
          onSwitchToSignUp={() => {
            setIsSignInOpen(false);
            setIsSignUpOpen(true);
          }}
        />
      )}

      {isSignUpOpen && (
        <ModalSignUp
          onClose={() => setIsSignUpOpen(false)}
          onSwitchToSignIn={() => {
            setIsSignUpOpen(false);
            setIsSignInOpen(true);
          }}
        />
      )}
    </header>
  );
};

export default Header;
