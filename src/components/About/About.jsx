import '/src/components/About/about.scss'

const About = () => {
    return (
        <section id="about" className="about">
            <img className="dots__image" src="/src/images/about/dots.svg" data-svg-fill="false" alt="dots image"/>
            <div className="container">
                <div className="about__box">
                    <div>
                        <img className="about__img" src="/src/images/about/about_image.jpg" alt="About us image"/>
                    </div>
                    <div className="about__inner">
                        <h4 className="about__inner-subtitle">WHO WE ARE</h4>
                        <h6 className="about__inner-title">Why Createx?</h6>
                        <div className="about__info">
                            <ul className="about__text about__list">
                                <li className="about__info-text about__list-item">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                            alt="Check icon svg"/>
                                    <p className="about__list-item__text">A fermentum in morbi pretium aliquam
                                        adipiscing donec tempus.</p>
                                </li>
                                <li className="about__info-text">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                            alt="Check icon svg"/>
                                    <p className="about__list-item__text">Vulputate placerat amet pulvinar lorem
                                        nisl.</p>
                                </li>
                                <li className="about__info-text">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                            alt="Check icon svg"/>
                                    <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                                </li>
                                <li className="about__info-text">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                         alt="Check icon svg"/>
                                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                                </li>
                                <li className="about__info-text">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                         alt="Check icon svg"/>
                                    <p>Tincidunt sagittis neque sem ac eget.</p>
                                </li>
                                <li className="about__info-text">
                                    <img className="about__list-item__icon" src="/src/images/icons/check.svg"
                                         alt="Check icon svg"/>
                                    <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                                </li>
                            </ul>
                        </div>
                        <button className="button__primary">More about us</button>
                    </div>
                </div>
            </div>
            <div className="circles__image-container">
                <img className="circles__image" src="/src/images/about/circles.svg" data-svg-fill="false"
                     alt="circles image"/>
            </div>
        </section>
    )
}

export default About;