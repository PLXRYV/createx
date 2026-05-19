import '/src/style/globals/modal-sign.scss'

const ModalSignUp = () => {
    return (
        <div className={styles.modal modal__register}>
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__header}>
                    <button className={styles.modal__close modal__close-signup}>
                        <img className={styles.modal__close-icon} data-svg-fill="false" src="/src/assets/images/icons/cross.svg" alt="Close modal"/>
                    </button>
                </div>
                <div className={styles.modal__content}>
                    <h2 className={styles.modal__title}>Sign Up</h2>
                    <p className={styles.modal__subtitle}>Registration takes less than a minute but gives you full control over
                        your studying.</p>
                    <form className={styles.form}>
                        <div className={styles.form__field}>
                            <label className={styles.form__label}>Full name</label>
                            <input className={styles.form__input} type="email" placeholder="Your full name"/>
                        </div>
                        <div className={styles.form__field}>
                            <label className={styles.form__label}>Email</label>
                            <input className={styles.form__input} type="email" placeholder="Your working email"/>
                        </div>
                        <div className={styles.form__field}>
                            <label className={styles.form__label}>Password</label>
                            <input className={styles.form__input} type="password" placeholder="Enter your password" required/>
                            <button type="button" className={styles.form__toggle-password} aria-label="Show password">
                                <img className={styles.modal__close-icon} src="/src/assets/images/modal_icons/eyepass.svg" alt="Show password"/>
                            </button>
                        </div>
                        <div className={styles.form__field}>
                            <label className={styles.form__label}>Confirm password</label>
                            <input className={styles.form__input} type="password" placeholder="Confirm your password" required/>
                            <button type="button" className={styles.form__toggle-password-confirm} aria-label="Show password">
                                <img className={styles.modal__close-icon} src="/src/assets/images/modal_icons/eyepass.svg"
                                     alt="Show password"/>
                            </button>
                        </div>
                        <div className={styles.form-options}>
                            <label className={styles.remember-checkbox}>
                                <input type="checkbox"/>
                                <span className={styles.checkmark}></span>
                                <span className={styles.checkbox-text}>Remember me</span>
                            </label>
                        </div>
                        <button className={styles.form__submit} type="submit">Sign up</button>
                        <div className={styles.form__register}>
                            <p className={styles.form__register-text}>Already have an account?</p>
                            <a className={styles.form__register-link} href="#">Sign in</a>
                        </div>
                    </form>
                </div>
                <div className={styles.horizon__divider}></div>
                <div className={styles.modal__footer}>
                    <p className={styles.modal__footer-text}>Or sign in with</p>
                    <div className={styles.modal__footer-social}>
                        <a className={styles.modal__footer-link} href="#">
                            <img className={styles.modal__social-link-img} src="/src/assets/images/modal_icons/Facebook.svg"
                                 alt="Facebook"/>
                        </a>
                        <a className={styles.modal__footer-link} href="#">
                            <img className={styles.modal__social-link-img} src="/src/assets/images/modal_icons/Google.svg"
                                 alt="Google"/>
                        </a>
                        <a className={styles.modal__footer-link} href="#">
                            <img className={styles.modal__social-link-img} src="/src/assets/images/modal_icons/Twitter.svg"
                                 alt="Twitter"/>
                        </a>
                        <a className={styles.modal__footer-link} href="#">
                            <img className={styles.modal__social-link-img} src="/src/assets/images/modal_icons/Linked-In.svg"
                                 alt="Linked-In"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSignUp;