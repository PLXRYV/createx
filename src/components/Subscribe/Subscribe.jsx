import './subscribe.scss';

const Subscribe = () => {
    return (
        <section id="contacts" className="subscribe">
            <div className="subscribe__container">
                <div className="subscribe__header">
                    <h6 className="subscribe__header-text">
                        <span>DON’T MISS ANYTHING</span>
                        Subscribe to the Createx School announcements
                    </h6>
                </div>
                <div className="subscribe__form">
                    <form action="#">
                        <input type="email" placeholder="Your working email"/>
                    </form>
                    <button className="button__primary">Subscribe</button>
                </div>
            </div>
            <img className="subscribe__image-1" src="/src/images/subscribe/subscribe_illustration.svg"
                 data-svg-fill="false" alt="image subscribe"/>
            <img className="subscribe__image-2" src="/src/images/subscribe/subscribe_illustration.svg"
                 data-svg-fill="false" alt="image subscribe"/>
        </section>
    )
}

export default Subscribe;