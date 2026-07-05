import heartIcon from '@assets/images/common/footer/heart.svg';
import { scrollToTopSmooth } from '@hooks/useScrollToTop';
import React from 'react';

import styles from './Copyright.module.scss';

const CopyrightSection: React.FC = () => {
  return (
    <div className={styles.copyrightSection}>
      <div className="container">
        <div className={styles.copyrightInfo}>
          <div className={styles.copyrightTextBox}>
            <p className={styles.copyrightText}>© All rights reserved.</p>
            <p className={styles.copyrightText}>Made with</p>
            <img src={heartIcon} alt="Heart icon love" />
            <p className={styles.copyrightText}>by CreateX Studio</p>
          </div>
          <button type="button" className={styles.btnUp} onClick={scrollToTopSmooth}>
            GO TO TOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
