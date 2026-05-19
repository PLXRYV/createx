import './certificate.scss';

const Certificate = () => {
    return (
        <section className={styles.certificate}>
            <div className={styles.container}>
                <div className={styles.certificate__container}>
                    <div className={styles.certificate__content}>
                        <div className={styles.certificate__header}>
                            <h6 className={styles.certificate__header-text}>
                                <span>CREATEX CERTIFICATE</span>
                                Your expertise will be confirmed
                            </h6>
                        </div>
                        <div className={styles.certificate__description}>
                            <p className={styles.certificate__description-text}>
                                We are accredited by international professional organizations and institutes:
                            </p>
                            <div className={styles.certificate__description-images}>
                                <img className={styles.certificate__description-image}
                                     src="/src/assets/images/certificate/certificate_image-1.svg" alt="certificate image"/>
                                <img className={styles.certificate__description-image}
                                     src="/src/assets/images/certificate/certificate_image-2.svg" alt="certificate image"/>
                                <img className={styles.certificate__description-image}
                                     src="/src/assets/images/certificate/certificate_image-3.svg" alt="certificate image"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className={styles.certificate__createx} src="/src/assets/images/certificate/certificate_createx.jpg"
                             alt="certificate"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate;