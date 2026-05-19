import React from 'react';
import styles from './Copyright.module.scss';

// Импортируем иконку сердечка как модуль для Vite
import heartIcon from '../../../../../assets/images/common/images/footer/heart.svg';

const CopyrightSection: React.FC = () => {
    return (
        <div className={styles.copyrightSection}>
            <div className="container"> {/* Глобальный класс пишем строкой */}
                <div className={styles.copyrightInfo}>

                    {/* Текст копирайта */}
                    <div className={styles.copyrightTextBox}>
                        <p className={styles.copyrightText}>© All rights reserved.</p>
                        <p className={styles.copyrightText}>Made with</p>
                        <img src={heartIcon} alt="Heart icon love"/>
                        <p className={styles.copyrightText}>by Createx Studio</p>
                    </div>

                    {/* Кнопка возврата наверх */}
                    <a href="#header" className={styles.btnUp}>GO TO TOP</a>

                </div>
            </div>
        </div>
    );
};

export default CopyrightSection;
