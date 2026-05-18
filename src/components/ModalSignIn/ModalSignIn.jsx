import '/src/style/globals/modal-sign.scss'

const ModalSignIn = () => {
    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__header">
                    <button id="closeModalSignIn" className="modal__close">
                        <img className="modal__close-icon" data-svg-fill="false" src="/src/images/icons/cross.svg" alt="Close modal"/>
                    </button>
                </div>
                <div className="modal__content">
                    <h2 className="modal__title">Sign In</h2>
                    <p className="modal__subtitle">Sign in to your account using email and password provided during registration.</p>
                    <form className="form">
                        <div className="form__field">
                            <label className="form__label">Email</label>
                            <input className="form__input" type="email" placeholder="Your working email"/>
                        </div>
                        <div className="form__field">
                            <label className="form__label">Password</label>
                            <input className="form__input" type="password" placeholder="Enter your password" required />
                            <button type="button" className="form__toggle-password" aria-label="Show password">
                                <img className="modal__close-icon" src="/src/images/modal_icons/eyepass.svg" alt="Show password"/>
                            </button>
                        </div>
                        <div className="form-options">
                            <label className="remember-checkbox">
                                <input type="checkbox">
                                    <span className="checkmark"></span>
                                    <span className="checkbox-text">Keep me signed in</span>
                                </input>
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                        <button className="form__submit" type="submit">Sign In</button>
                        <div className="form__register">
                            <p className="form__register-text">Don't have an account?</p>
                            <a className="form__register-link" href="#">Sign up</a>
                        </div>
                    </form>
                </div>
                <div className="horizon__divider"></div>
                <div className="modal__footer">
                    <p className="modal__footer-text">Or sign in with</p>
                    <div className="modal__footer-social">
                        <a className="modal__footer-link" href="#">
                            <img className="modal__social-link-img" src="/src/images/modal_icons/Facebook.svg" alt="Facebook"/>
                        </a>
                        <a className="modal__footer-link" href="#">
                            <img className="modal__social-link-img" src="/src/images/modal_icons/Google.svg" alt="Google"/>
                        </a>
                        <a className="modal__footer-link" href="#">
                            <img className="modal__social-link-img" src="/src/images/modal_icons/Twitter.svg" alt="Twitter"/>
                        </a>
                        <a className="modal__footer-link" href="#">
                            <img className="modal__social-link-img"  src="/src/images/modal_icons/Linked-In.svg" alt="Linked-In"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalSignIn;