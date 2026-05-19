import './header.scss'
import { Link } from 'react-router-dom';
import ButtonPrimary from '/src/components/ButtonPrimary/ButtonPrimary';
import BurgerMenu from "/src/components/BurgerMenu/BurgerMenu";
import ModalSignIn from "/src/components/ModalSignIn/ModalSignIn.jsx";
import ModalSignUp from "/src/components/ModalSignUp/ModalSignUp.jsx";

const Header = ({ button }) => {
    return (
        <div className={styles.Header}>
            <header id="header" className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__inner}>
                        <div className={styles.header__menu}>
                            <Link to="/" className={styles.logo}>
                                <img className={styles.logo__img} src="/src/assets/images/header/logo.svg" data-svg-fill="false"
                                        alt="Logo of site"/>
                            </Link>
                            <nav className={styles.nav}>
                                <ul className={styles.nav__menu}>
                                    <li className={styles.nav__menu-item}>
                                        <a href="#about" className={styles.nav__menu-item__link}>About Us</a>
                                    </li>
                                    <Link to="/courses" className={styles.nav__menu-item}>
                                        <a className={styles.nav__menu-item__link}>Courses</a>
                                    </Link>
                                    <Link to="/events" className={styles.nav__menu-item}>
                                        <a className={styles.nav__menu-item__link}>Events</a>
                                    </Link>
                                    <li className={styles.nav__menu-item}>
                                        <a href="#blog" className={styles.nav__menu-item__link}>Blog</a>
                                    </li>
                                    <li className={styles.nav__menu-item}>
                                        <a href="#contacts" className={styles.nav__menu-item__link}>Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className={styles.header__info-actions}>
                            {button}
                            <div className={styles.header__auth}>
                                <button onClick={ModalSignIn} id="#signIn" className={styles.header__auth-btn header__auth-btn--signin}>
                                    <img className={styles.header__auth-icon} src="/src/assets/images/header/Profile.svg"
                                            alt="Profile"/>
                                    Sign in
                                </button>
                                <span className={styles.header__auth-separator}>/</span>
                                <button onClick={ModalSignUp} id="#signup" className={styles.header__auth-btn header__auth-btn--signup}>Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;