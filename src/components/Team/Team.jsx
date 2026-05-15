import './team.scss';

const Team = () => {
    return (
        <section className="team__and-testimonials">
            <div className="container">
                <div className="team__container">
                    <div className="team__header">
                        <h6 className="team__header-text">
                            <span>BEST TUTORS ARE ALL HERE</span>
                            Meet our team
                        </h6>
                        <div className="team__arrows">
                            <button className="team__arrow-left">
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M6.20711 10.7071C5.81658 11.0976 5.18342 11.0976 4.79289 10.7071L0.292892 6.20711C-0.0976315 5.81658 -0.0976315 5.18342 0.292892 4.79289L4.79289 0.292893C5.18342 -0.0976315 5.81658 -0.0976315 6.20711 0.292893C6.59763 0.683417 6.59763 1.31658 6.20711 1.70711L3.41421 4.5L17 4.5C17.5523 4.5 18 4.94772 18 5.5C18 6.05228 17.5523 6.5 17 6.5L3.41421 6.5L6.20711 9.29289C6.59763 9.68342 6.59763 10.3166 6.20711 10.7071Z"
                                          fill="#424551"/>
                                </svg>
                            </button>
                            <button className="team__arrow-right">
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M11.7929 0.292893C12.1834 -0.0976311 12.8166 -0.0976311 13.2071 0.292893L17.7071 4.79289C18.0976 5.18342 18.0976 5.81658 17.7071 6.20711L13.2071 10.7071C12.8166 11.0976 12.1834 11.0976 11.7929 10.7071C11.4024 10.3166 11.4024 9.68342 11.7929 9.29289L14.5858 6.5H1C0.447715 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5H14.5858L11.7929 1.70711C11.4024 1.31658 11.4024 0.683417 11.7929 0.292893Z"
                                          fill="#424551"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="team__navigation">
                        <div className="team__navigation_list">
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-1.png"
                                         alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Dianne Russell</span>
                                    Founder and CEO
                                </p>
                            </div>
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-2.png"
                                         alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Jerome Bell</span>
                                    Founder and Program Director
                                </p>
                            </div>
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-3.png"
                                         data-svg-fill="false" alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Kristin Watson</span>
                                    Marketer, Curator of Marketing Course
                                </p>
                            </div>
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-4.png"
                                         alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Marvin McKinney</span>
                                    PM, Curator of Management Course
                                </p>
                            </div>
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-4.png"
                                         alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Marvin McKinney</span>
                                    PM, Curator of Management Course
                                </p>
                            </div>
                            <div className="team__navigation_item">
                                <div className="team__navigation_item-images">
                                    <img className="team__image" src="/src/images/team/team_image-4.png"
                                         alt="team image"/>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Facebook.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Instagram.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                    <a href="#" className="team__social-link">
                                        <img className="team__social" src="/src/images/team/Linked-In.svg"
                                             data-svg-fill="false" alt="team social"/>
                                    </a>
                                </div>
                                <p className="team__image-caption">
                                    <span>Marvin McKinney</span>
                                    PM, Curator of Management Course
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;