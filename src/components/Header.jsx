const Header = () => {
    return (
        <div className="Header">
            <header id="header" className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__menu">
                            <a href="/index.html" className="logo">
                                <img className="logo__img" src="/src/images/header/logo.svg" data-svg-fill="false"
                                        alt="Logo of site"/>
                            </a>
                            <nav className="nav">
                                <ul className="nav__menu">
                                    <li className="nav__menu-item">
                                        <a href="#about" className="nav__menu-item__link">About Us</a>
                                    </li>
                                    <li className="nav__menu-item">
                                        <a href="#courses" className="nav__menu-item__link">Courses</a>
                                    </li>
                                    <li className="nav__menu-item">
                                        <a href="/src/html/events.html" className="nav__menu-item__link">Events</a>
                                    </li>
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
                            <button className="button button__primary button__primary-consultation">Get consultation
                            </button>
                            <div className="header__auth">
                                <button id="#signIn" className="header__auth-btn header__auth-btn--signin">
                                    <img className="header__auth-icon" src="src/images/header/Profile.svg"
                                            alt="Profile"/>
                                    Sign in
                                </button>
                                <span className="header__auth-separator">/</span>
                                <button id="#signup" className="header__auth-btn header__auth-btn--signup">Sign up
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