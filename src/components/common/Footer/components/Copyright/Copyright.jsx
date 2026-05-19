import './copyright.scss'

const Copyright = () => {
    return (
        <section className={styles.footer__copyright}>
            <div className={styles.container}>
                <div className={styles.footer__copyright-info}>
                    <div className={styles.footer__copyright-text}>
                        <p className={styles.copyright}>© All rights reserved.</p>
                        <p className={styles.copyright}>Made with</p>
                        <img src="/src/assets/images/footer/heart.svg" data-svg-fill="false" alt="image love"/>
                        <p className={styles.copyright}>by Createx Studio</p>
                    </div>
                    <a href="#header" className={styles.btn__up}>GO TO TOP</a>
                </div>
            </div>
        </section>
    )
}

export default Copyright