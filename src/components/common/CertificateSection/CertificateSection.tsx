import {
  CertificateCreatex,
  CertificateImageFirst,
  CertificateImageSecond,
  CertificateImageThird,
} from '@assets/images/common/certificate';
import React from 'react';

import styles from './Certificate.module.scss';

interface CertificateSectionProps {
  className?: string;
}

const CertificateSection: React.FC<CertificateSectionProps> = ({ className = '' }) => {
  return (
    <section className={`${styles.certificateSection} ${className}`}>
      <div className="container">
        <div className={styles.certificateContainer}>
          <div className={styles.certificateContent}>
            <div className={styles.certificateHeader}>
              <p className={styles.certificateHeaderSubtitle}>CREATEX CERTIFICATE</p>
              <h2 className={styles.certificateHeaderTitle}>Your expertise will be confirmed</h2>
            </div>
            <div className={styles.certificateDescription}>
              <p className={styles.certificateDescriptionText}>
                We are accredited by international professional organizations and institutes:
              </p>
              <div className={styles.certificateDescriptionImages}>
                <CertificateImageFirst className={styles.certificateDescriptionImage} />
                <CertificateImageSecond className={styles.certificateDescriptionImage} />
                <CertificateImageThird className={styles.certificateDescriptionImage} />
              </div>
            </div>
          </div>
          <div className={styles.certificateImageWrapper}>
            <img
              className={styles.certificateCreatex}
              src={CertificateCreatex}
              alt="Createx official certificate layout's"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
