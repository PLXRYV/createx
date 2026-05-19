import './subscribe.scss';

const Subscribe = () => {
    return (
        <section id="contacts" className={styles.subscribe}>
            <div className={styles.subscribe__container}>
                <div className={styles.subscribe__header}>
                    <h6 className={styles.subscribe__header-text}>
                        <span>DON’T MISS ANYTHING</span>
                        Subscribe to the Createx School announcements
                    </h6>
                </div>
                <div className={styles.subscribe__form}>
                    <form action="#">
                        <input type="email" placeholder="Your working email"/>
                    </form>
                    <button className={styles.button__primary}>Subscribe</button>
                </div>
            </div>
            <img className={styles.subscribe__image-1} src="/src/assets/images/subscribe/subscribe_illustration.svg"
                 data-svg-fill="false" alt="image subscribe"/>
            <img className={styles.subscribe__image-2} src="/src/assets/images/subscribe/subscribe_illustration.svg"
                 data-svg-fill="false" alt="image subscribe"/>
        </section>
    )
}

export default Subscribe;