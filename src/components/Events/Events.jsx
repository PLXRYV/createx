import './events.scss';

const Events = () => {
    return (
        <section id="events" className="events">
            <img className="events__dots" src="/src/images/events/events_dots.svg" data-svg-fill="false"
                 alt="events dots"/>
            <img className="events__circles" src="/src/images/events/events_circles.svg" data-svg-fill="false"
                 alt="events circles"/>
            <div className="container">
                <div className="events__container">
                    <div className="events__header">
                        <h6 className="events__header-text">
                            <span>OUR EVENTS</span>
                            Lectures & workshops
                        </h6>
                    </div>
                    <div className="events__navigation">
                        <div className="events__navigation_list">
                            <div className="events__link">
                                <div className="events__link-date">
                                    <time datatime="2025-08-05">05</time>
                                    <div className="events__link_month-time">
                                        <time datatime="2025-08-05T11:00 - 14:00"><span>August</span>11:00 - 14:00
                                        </time>
                                    </div>
                                </div>
                                <div className="events__info">
									<span>
										Formation of the organizational structure of the company in the face of uncertainty.
									</span>
                                    Online master-class
                                </div>
                                <div className="events__link-button">
                                    <button className="events__button">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="events__navigation_list">
                            <div className="events__link">
                                <div className="events__link-date">
                                    <time datatime="2025-07-24">24</time>
                                    <div className="events__link_month-time">
                                        <time datatime="2025-07-24T11:00 - 12:30"><span>July</span>11:00 - 12:30</time>
                                    </div>
                                </div>
                                <div className="events__info events__info--left">
									<span>
										Building a customer service department. Best Practices.
									</span>
                                    Online lecture
                                </div>
                                <div className="events__link-button">
                                    <button className="events__button">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="events__navigation_list">
                            <div className="events__link">
                                <div className="events__link-date">
                                    <time datatime="2025-07-16">16</time>
                                    <div className="events__link_month-time">
                                        <time datatime="2025-07-16T10:00 - 13:00"><span>July</span>10:00 - 13:00</time>
                                    </div>
                                </div>
                                <div className="events__info">
									<span>
										How to apply methods of speculative design in practice. Worldbuilding prototyping.
									</span>
                                    Onine workshop
                                </div>
                                <div className="events__link-button">
                                    <button className="events__button">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events__more">
                        <p className="events__more-text">
                            Do you want more?
                        </p>
                        <button className="button__primary">
                            Explore all events
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events;