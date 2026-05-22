import React from 'react';
import styles from './Copyright.module.scss';
import heartIcon from '../../../../../assets/images/common/images/footer/heart.svg';

const CopyrightSection: React.FC = () => {
    return (
        <div className={styles.copyrightSection}>
            <div className="container">
                <div className={styles.copyrightInfo}>
                    <div className={styles.copyrightTextBox}>
                        <p className={styles.copyrightText}>© All rights reserved.</p>
                        <p className={styles.copyrightText}>Made with</p>
                        <img src={heartIcon} alt="Heart icon love"/>
                        <p className={styles.copyrightText}>by Createx Studio</p>
                    </div>
                    <a href="#header" className={styles.btnUp}>GO TO TOP</a>
                </div>
            </div>
        </div>
    );
};

export default CopyrightSection;
