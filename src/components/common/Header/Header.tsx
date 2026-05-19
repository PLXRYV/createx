import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

// Импорт дочерних компонентов по новой иерархии папок
import ButtonPrimary from '../../ui/Button/ButtonPrimary';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import ModalSignIn from '../Modal/ModalSignIn/ModalSignIn.tsx';
import ModalSignUp from '../Modal/ModalSignUp/ModalSignUp.tsx';

// Импорт картинок как модулей для Vite
import logoSvg from '../../../assets/images/common/images/header/logo.svg';
import profileSvg from '../../../assets/images/common/images/header/Profile.svg';

interface HeaderProps {
    button?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ button }) => {
    // Стейты для управления видимостью элементов
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    // Функция переключения бургера
    const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

    return (
        <header id="header" className={styles.header}>
            <div className="container"> {/* Глобальный класс пишем строкой */}
                <div className={styles.headerInner}>

                    <div className={styles.headerMenu}>
                        {/* Логотип */}
                        <Link to="/" className={styles.logo}>
                            <img className={styles.logoImg} src={logoSvg} alt="Logo of site"/>
                        </Link>

                        {/* Навигация с динамическим классом для бургера */}
                        <nav className={styles.nav}>
                            <ul className={`${styles.navMenu} ${isBurgerOpen ? styles.navMenuOpen : ''}`}>
                                <li className={styles.navMenuItem}>
                                    <a href="#about" className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>About Us</a>
                                </li>
                                <li className={styles.navMenuItem}>
                                    <Link to="/courses" className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>Courses</Link>
                                </li>
                                <li className={styles.navMenuItem}>
                                    <Link to="/events" className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>Events</Link>
                                </li>
                                <li className={styles.navMenuItem}>
                                    <a href="#blog" className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>Blog</a>
                                </li>
                                <li className={styles.navMenuItem}>
                                    <a href="#contacts" className={styles.navMenuLink} onClick={() => setIsBurgerOpen(false)}>Contacts</a>
                                </li>
                            </ul>
                        </nav>
                    </div> {/* Конец деления headerMenu */}

                    {/* Правая часть: кнопки, авторизация, бургер */}
                    <div className={styles.headerInfoActions}>
                        {button}

                        <div className={styles.headerAuth}>
                            <button
                                type="button"
                                onClick={() => setIsSignInOpen(true)}
                                className={`${styles.headerAuthBtn} ${styles.headerAuthBtnSignin}`}
                            >
                                <img className={styles.headerAuthIcon} src={profileSvg} alt="Profile"/>
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

                        {/* Компонент Бургера */}
                        <BurgerMenu isOpen={isBurgerOpen} onToggle={toggleBurger} />
                    </div> {/* Конец деления headerInfoActions */}

                </div> {/* Конец деления headerInner */}
            </div> {/* Конец деления container */}

            {/* Рендерим модалки на основе стейтов открытия */}
            {isSignInOpen && <ModalSignIn onClose={() => setIsSignInOpen(false)} />}
            {isSignUpOpen && <ModalSignUp onClose={() => setIsSignUpOpen(false)} />}
        </header>
    );
};

export default Header;
