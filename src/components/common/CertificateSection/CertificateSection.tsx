import React from 'react';
import styles from './Certificate.module.scss';

// Импортируем логотипы организаций аккредитации как модули для Vite
import partnerLogo1 from '../../../assets/images/common/images/certificate/certificate_image-1.svg';
import partnerLogo2 from '../../../assets/images/common/images/certificate/certificate_image-2.svg';
import partnerLogo3 from '../../../assets/images/common/images/certificate/certificate_image-3.svg';

// Импортируем главное изображение сертификата Createx
import certificateImg from '../../../assets/images/common/images/certificate/certificate_createx.jpg';

const CertificateSection: React.FC = () => {
    return (
        <section className={styles.certificateSection}>
            <div className="container"> {/* Глобальный класс пишем строкой */}
                <div className={styles.certificateContainer}>

                    {/* Левый блок: Текстовый контент и партнеры */}
                    <div className={styles.certificateContent}>

                        {/* Шапка секции (исправлена семантика тегов) */}
                        <div className={styles.certificateHeader}>
                            <p className={styles.certificateHeaderSubtitle}>CREATEX CERTIFICATE</p>
                            <h2 className={styles.certificateHeaderTitle}>
                                Your expertise will be confirmed
                            </h2>
                        </div>

                        {/* Описание и логотипы аккредитации */}
                        <div className={styles.certificateDescription}>
                            <p className={styles.certificateDescriptionText}>
                                We are accredited by international professional organizations and institutes:
                            </p>
                            <div className={styles.certificateDescriptionImages}>
                                <img className={styles.certificateDescriptionImage} src={partnerLogo1} alt="Accreditation partner logo 1"/>
                                <img className={styles.certificateDescriptionImage} src={partnerLogo2} alt="Accreditation partner logo 2"/>
                                <img className={styles.certificateDescriptionImage} src={partnerLogo3} alt="Accreditation partner logo 3"/>
                            </div>
                        </div>

                    </div>

                    {/* Правый блок: Изображение самого сертификата */}
                    <div className={styles.certificateImageWrapper}>
                        <img className={styles.certificateCreatex} src={certificateImg} alt="Createx official certificate layout"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CertificateSection;
