import React, { useState } from 'react';
import styles from '../Modal.module.scss';
import crossIcon from '../../../../assets/icons/cross.svg';
import eyeIcon from '../../../../assets/icons/modal-icons/eyepass.svg';
import facebookIcon from '../../../../assets/icons/modal-icons/Facebook.svg';
import googleIcon from '../../../../assets/icons/modal-icons/Google.svg';
import twitterIcon from '../../../../assets/icons/modal-icons/Twitter.svg';
import linkedInIcon from '../../../../assets/icons/modal-icons/Linked-In.svg';

interface ModalSignUpProps {
    onClose: () => void;
}

const ModalSignUp: React.FC<ModalSignUpProps> = ({ onClose }) => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`${styles.modal} ${styles.modalRegister}`} onClick={handleOverlayClick}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalHeader}>
                    <button
                        type="button"
                        className={`${styles.modalClose} ${styles.modalCloseSignup}`}
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <img className={styles.modalCloseIcon} src={crossIcon} alt="Close icon"/>
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Sign Up</h2>
                    <p className={styles.modalSubtitle}>
                        Registration takes less than a minute but gives you full control over your studying.
                    </p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Full name</label>
                            <input className={styles.formInput} type="text" placeholder="Your full name" required />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Email</label>
                            <input className={styles.formInput} type="email" placeholder="Your working email" required />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Password</label>
                            <input
                                className={styles.formInput}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className={styles.formTogglePassword}
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                <img className={styles.modalCloseIcon} src={eyeIcon} alt="Toggle password visibility"/>
                            </button>
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Confirm password</label>
                            <input
                                className={styles.formInput}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                required
                            />
                            <button
                                type="button"
                                className={styles.formTogglePasswordConfirm}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                                <img className={styles.modalCloseIcon} src={eyeIcon} alt="Toggle password visibility"/>
                            </button>
                        </div>
                        <div className={styles.formOptions}>
                            <label className={styles.rememberCheckbox}>
                                <input type="checkbox"/>
                                <span className={styles.checkmark}></span>
                                <span className={styles.checkboxText}>Remember me</span>
                            </label>
                        </div>
                        <button className={styles.formSubmit} type="submit">Sign up</button>
                        <div className={styles.formRegister}>
                            <p className={styles.formRegisterText}>Already have an account?</p>
                            <a className={styles.formRegisterLink} href="#">Sign in</a>
                        </div>
                    </form>
                </div>
                <div className={styles.horizonDivider}></div>
                <div className={styles.modalFooter}>
                    <p className={styles.modalFooterText}>Or sign in with</p>
                    <div className={styles.modalFooterSocial}>
                        <a className={styles.modalFooterLink} href="#">
                            <img className={styles.modalSocialLinkImg} src={facebookIcon} alt="Facebook"/>
                        </a>
                        <a className={styles.modalFooterLink} href="#">
                            <img className={styles.modalSocialLinkImg} src={googleIcon} alt="Google"/>
                        </a>
                        <a className={styles.modalFooterLink} href="#">
                            <img className={styles.modalSocialLinkImg} src={twitterIcon} alt="Twitter"/>
                        </a>
                        <a className={styles.modalFooterLink} href="#">
                            <img className={styles.modalSocialLinkImg} src={linkedInIcon} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalSignUp;
