import "/src/components/Main/main.scss";
import "/src/components/Main/main-stats.scss"
import buttonPrimaryMobile from "../ButtonPrimary/ButtonPrimaryMobile.jsx";
import buttonPrimary from "../ButtonPrimary/ButtonPrimary.jsx";

const Main = ({ button, buttonPrimaryMobile, buttonPrimary }) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="main__info">
                        <div className="main__info-video">
                            <button type="button" className="main__video-button">
                                <img src="/src/images/main/main_play_video.svg" alt="play"/>
                            </button>
                            <p className="main__video-text">Play showreel</p>
                        </div>
                        <h1 className="main__info-title">
                            Enjoy studying with Createx Online Courses
                        </h1>
                        <div className="main__info-actions">
                            {/*{buttonPrimaryMobile}*/}
                            <button className="button button__secondary">About Us</button>
                            {button}
                        </div>
                    </div>
                    <div>
                        <img src="/src/images/main/illustration-main.svg" data-svg-fill="false" alt="Courses image"/>
                    </div>
                </div>
                <div className="stats">
                    <div className="stats__items">
                        <a href="#" className="stats__item">
                            <span className="stats__item-number">1200</span>
                            <span className="stats__item-text">Students graduated</span>
                        </a>
                        <div className="stats__item--circle"></div>
                        <a href="#" className="stats__item">
                            <span className="stats__item-number">84</span>
                            <span className="stats__item-text">Completed Courses</span>
                        </a>
                        <div className="stats__item--circle"></div>
                        <a href="#" className="stats__item">
                            <span className="stats__item-number">16</span>
                            <span className="stats__item-text">Qualified tutors</span>
                        </a>
                        <div className="stats__item--circle"></div>
                        <a href="#" className="stats__item">
                            <span className="stats__item-number">5</span>
                            <span className="stats__item-text">Years of experience</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;