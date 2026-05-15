import './benefits.scss'

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="container">
                <div className="benefits__container">
                    <div className="benefits__header">
                        <h6 className="benefits__header-text">
                            <span>OUR BENEFITS</span>
                            That’s how we do it
                        </h6>
                    </div>
                    <div className="benefits__navigation">
                        <nav className="benefits__navigation-bar">
                            <button className="benefits__navigation-link active"
                                    data-target="tutors">
                                <img className="navigation-link__icon" src="/src/images/icons/tutors.svg"
                                     alt="Tutors icon svg"/>
                                Experienced Tutors
                            </button>
                            <button className="benefits__navigation-link"
                                    data-target="feedback">
                                <img className="navigation-link__icon" src="/src/images/icons/feedback.svg"
                                     alt="Feedback icon svg"/>
                                Feedback & Support
                            </button>
                            <button className="benefits__navigation-link"
                                    data-target="library">
                                <img className="navigation-link__icon" src="/src/images/icons/library.svg"
                                     alt="Library icon svg"/>
                                24/7 Online Library
                            </button>
                            <button className="benefits__navigation-link"
                                    data-target="community">
                                <img className="navigation-link__icon" src="/src/images/icons/community.svg"
                                     alt="Community icon svg"/>
                                Community
                            </button>
                        </nav>
                    </div>
                    <div className="benefits__content active benefits__content-tutors">
                        <div className="benefits__content-box">
                            <p className="benefits__content-text">
                                <span>Only practicing tutors</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                        <div>
                            <img src="/src/images/benefits/benefits_illustration.jpg" alt="Benefits image"/>
                        </div>
                    </div>
                    <div className="benefits__content benefits__content-feedback">
                        <div>
                            <img src="/src/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                        <div className="benefits__content-box">
                            <p className="benefits__content-text">
                                <span>Feedback & Support</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                    </div>
                    <div className="benefits__content benefits__content-library">
                        <div className="benefits__content-box">
                            <p className="benefits__content-text">
                                <span>Online Library</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                        <div>
                            <img src="/src/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                    </div>
                    <div className="benefits__content benefits__content-community">
                        <div>
                            <img src="/src/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                        <div className="benefits__content-box">
                            <p className="benefits__content-text">
                                <span>Community</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;