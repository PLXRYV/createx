import React, { useState, useEffect } from 'react';
import styles from '../Modal.module.scss'; // Переиспользуем общий файл модульных стилей

// Импортируем иконки как модули для Vite
import crossIcon from '../../../../assets/icons/cross.svg';
import eyeIcon from '../../../../assets/icons/modal-icons/eyepass.svg';
import facebookIcon from '../../../../assets/icons/modal-icons/Facebook.svg';
import googleIcon from '../../../../assets/icons/modal-icons/Google.svg';
import twitterIcon from '../../../../assets/icons/modal-icons/Twitter.svg';
import linkedInIcon from '../../../../assets/icons/modal-icons/Linked-In.svg';

// Описываем тип входящих пропсов
interface ModalSignInProps {
    onClose: () => void;
}

const ModalSignIn: React.FC<ModalSignInProps> = ({ onClose }) => {
    // Стейт для переключения видимости пароля
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Блокируем скролл сайта при открытии окна
    useEffect(() => {
        const body = document.body;
        body.classList.add('no-scroll');
        return () => {
            body.classList.remove('no-scroll');
        };
    }, []);

    // Функция закрытия при клике на серое пространство (оверлей)
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Функция обработки отправки формы
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Sign in form submitted");
    };

    return (
        // Главный оверлей модального окна с обработчиком клика
        <div className={styles.modal} onClick={handleOverlayClick}>
            <div className={styles.modalWrapper}>

                {/* Шапка модалки с кнопкой закрытия */}
                <div className={styles.modalHeader}>
                    <button
                        type="button"
                        className={styles.modalClose}
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <img className={styles.modalCloseIcon} src={crossIcon} alt="Close icon"/>
                    </button>
                </div>

                {/* Основной контент */}
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Sign In</h2>
                    <p className={styles.modalSubtitle}>
                        Sign in to your account using email and password provided during registration.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Поле: Email */}
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Email</label>
                            <input className={styles.formInput} type="email" placeholder="Your working email" required />
                        </div>

                        {/* Поле: Пароль */}
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Password</label>
                            <input
                                className={styles.formInput}
                                type={showPassword ? "text" : "password"} // Динамический тип инпута
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className={styles.formTogglePassword}
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                <img className={styles.modalCloseIcon} src={eyeIcon} alt="Toggle visibility"/>
                            </button>
                        </div>

                        {/* Опции: Чекбокс и ссылка забытого пароля */}
                        <div className={styles.formOptions}>
                            <label className={styles.rememberCheckbox}>
                                {/* Исправили структуру: тег input теперь самозакрывающийся */}
                                <input type="checkbox" />
                                <span className={styles.checkmark}></span>
                                <span className={styles.checkboxText}>Keep me signed in</span>
                            </label>
                            <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                        </div>

                        <button className={styles.formSubmit} type="submit">Sign In</button>

                        <div className={styles.formRegister}>
                            <p className={styles.formRegisterText}>Don't have an account?</p>
                            <a className={styles.formRegisterLink} href="#">Sign up</a>
                        </div>
                    </form>
                </div>

                <div className={styles.horizonDivider}></div>

                {/* Подвал модалки: Соцсети */}
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

export default ModalSignIn;
