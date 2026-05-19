import './events.scss';

const Events = () => {
    return (
        <section id="events" className={styles.events}>
            <img className={styles.events__dots} src="/src/assets/images/events/events_dots.svg" data-svg-fill="false"
                 alt="events dots"/>
            <img className={styles.events__circles} src="/src/assets/images/events/events_circles.svg" data-svg-fill="false"
                 alt="events circles"/>
            <div className={styles.container}>
                <div className={styles.events__container}>
                    <div className={styles.events__header}>
                        <h6 className={styles.events__header-text}>
                            <span>OUR EVENTS</span>
                            Lectures & workshops
                        </h6>
                    </div>
                    <div className={styles.events__navigation}>
                        <div className={styles.events__navigation_list}>
                            <div className={styles.events__link}>
                                <div className={styles.events__link-date}>
                                    <time datatime="2025-08-05">05</time>
                                    <div className={styles.events__link_month-time}>
                                        <time datatime="2025-08-05T11:00 - 14:00"><span>August</span>11:00 - 14:00
                                        </time>
                                    </div>
                                </div>
                                <div className={styles.events__info}>
									<span>
										Formation of the organizational structure of the company in the face of uncertainty.
									</span>
                                    Online master-class
                                </div>
                                <div className={styles.events__link-button}>
                                    <button className={styles.events__button}>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.events__navigation_list}>
                            <div className={styles.events__link}>
                                <div className={styles.events__link-date}>
                                    <time datatime="2025-07-24">24</time>
                                    <div className={styles.events__link_month-time}>
                                        <time datatime="2025-07-24T11:00 - 12:30"><span>July</span>11:00 - 12:30</time>
                                    </div>
                                </div>
                                <div className={styles.events__info events__info--left}>
									<span>
										Building a customer service department. Best Practices.
									</span>
                                    Online lecture
                                </div>
                                <div className={styles.events__link-button}>
                                    <button className={styles.events__button}>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.events__navigation_list}>
                            <div className={styles.events__link}>
                                <div className={styles.events__link-date}>
                                    <time datatime="2025-07-16">16</time>
                                    <div className={styles.events__link_month-time}>
                                        <time datatime="2025-07-16T10:00 - 13:00"><span>July</span>10:00 - 13:00</time>
                                    </div>
                                </div>
                                <div className={styles.events__info}>
									<span>
										How to apply methods of speculative design in practice. Worldbuilding prototyping.
									</span>
                                    Onine workshop
                                </div>
                                <div className={styles.events__link-button}>
                                    <button className={styles.events__button}>
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.events__more}>
                        <p className={styles.events__more-text}>
                            Do you want more?
                        </p>
                        <button className={styles.button__primary}>
                            Explore all events
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events;