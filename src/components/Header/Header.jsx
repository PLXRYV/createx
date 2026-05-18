import './header.scss'
import { Link } from 'react-router-dom';
import ButtonPrimary from '/src/components/ButtonPrimary/ButtonPrimary';
import BurgerMenu from "/src/components/BurgerMenu/BurgerMenu";
import ModalSignIn from "/src/components/ModalSignIn/ModalSignIn.jsx";
import ModalSignUp from "/src/components/ModalSignUp/ModalSignUp.jsx";

const Header = ({ button }) => {
    return (
        <div className="Header">
            <header id="header" className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__menu">
                            <Link to="/" className="logo">
                                <img className="logo__img" src="/src/images/header/logo.svg" data-svg-fill="false"
                                        alt="Logo of site"/>
                            </Link>
                            <nav className="nav">
                                <ul className="nav__menu">
                                    <li className="nav__menu-item">
                                        <a href="#about" className="nav__menu-item__link">About Us</a>
                                    </li>
                                    <Link to="/courses" className="nav__menu-item">
                                        <a className="nav__menu-item__link">Courses</a>
                                    </Link>
                                    <Link to="/events" className="nav__menu-item">
                                        <a className="nav__menu-item__link">Events</a>
                                    </Link>
                                    <li className="nav__menu-item">
                                        <a href="#blog" className="nav__menu-item__link">Blog</a>
                                    </li>
                                    <li className="nav__menu-item">
                                        <a href="#contacts" className="nav__menu-item__link">Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__info-actions">
                            {button}
                            <div className="header__auth">
                                <button onClick={ModalSignIn} id="#signIn" className="header__auth-btn header__auth-btn--signin">
                                    <img className="header__auth-icon" src="/src/images/header/Profile.svg"
                                            alt="Profile"/>
                                    Sign in
                                </button>
                                <span className="header__auth-separator">/</span>
                                <button onClick={ModalSignUp} id="#signup" className="header__auth-btn header__auth-btn--signup">Sign up
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