import {
  CrossIcon,
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@assets/icons';
import React, { useEffect, useState } from 'react';

import styles from '../Modal.module.scss';

interface ModalSignInProps {
  onClose: () => void;
}
const ModalSignIn: React.FC<ModalSignInProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add('no-scroll');
    return () => {
      body.classList.remove('no-scroll');
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign's in form submitted");
  };

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <button
            type="button"
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close modal"
          >
            <CrossIcon className={styles.modalCloseIcon} />
          </button>
        </div>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Sign In</h2>
          <p className={styles.modalSubtitle}>
            Sign in to your account using email and password provided during registration.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Email</label>
              <input
                className={styles.formInput}
                type="email"
                placeholder="Your working email"
                required
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Password</label>
              <input
                className={styles.formInput}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className={styles.formTogglePassword}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon className={styles.modalCloseIcon} />
              </button>
            </div>
            <div className={styles.formOptions}>
              <label className={styles.rememberCheckbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                <span className={styles.checkboxText}>Keep me signed in</span>
              </label>
              <a href="#" className={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>
            <button className={styles.formSubmit} type="submit">
              Sign In
            </button>
            <div className={styles.formRegister}>
              <p className={styles.formRegisterText}>Don't have an account?</p>
              <a className={styles.formRegisterLink} href="#">
                Sign up
              </a>
            </div>
          </form>
        </div>

        <div className={styles.horizonDivider}></div>
        <div className={styles.modalFooter}>
          <p className={styles.modalFooterText}>Or sign in with</p>
          <div className={styles.modalFooterSocial}>
            <a className={styles.modalFooterLink} href="#">
              <FacebookIcon className={styles.modalSocialLinkImg} />
            </a>
            <a className={styles.modalFooterLink} href="#">
              <GoogleIcon className={styles.modalSocialLinkImg} />
            </a>
            <a className={styles.modalFooterLink} href="#">
              <TwitterIcon className={styles.modalSocialLinkImg} />
            </a>
            <a className={styles.modalFooterLink} href="#">
              <LinkedInIcon className={styles.modalSocialLinkImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignIn;
