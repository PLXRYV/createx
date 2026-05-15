import './courses.scss'

const Courses = () => {
    return (
        <section id="courses" className="courses">
            <div className="container">
                <div className="courses__contain-header">
                    <div className="courses__header">
                        <h6 className="courses__header-text">
                            <span>READY TO LEARN?</span>
                            Featured Courses
                        </h6>
                    </div>
                    <button className="button__secondary">View all courses</button>
                </div>
                <div className="courses__content">
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-1.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        Marketing
                                    </p>
                                    <p className="courses__card-tag">
                                        The Ultimate Google Ads Training Course
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $200
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Jerome Bell
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-2.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        Management
                                    </p>
                                    <p className="courses__card-tag">
                                        <span>Product Management</span>
                                        <span>Fundamentals</span>
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $480
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Marvin McKinney
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-3.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        HR & Recruting
                                    </p>
                                    <p className="courses__card-tag">
                                        HR Management and Analytics
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $200
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Leslie Alexander Li
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-4.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        Marketing
                                    </p>
                                    <p className="courses__card-tag">
                                        Brand Management & PR Communications
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $530
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Kristin Watson
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-5.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        Management
                                    </p>
                                    <p className="courses__card-tag">
                                        <span>Business Development</span>
                                        <span>Management</span>
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $400
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Dianne Russell
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="courses__container-card">
                        <img className="courses__content-img" src="/src/images/courses/course-6.jpg" alt="Course image"/>
                        <div className="courses__content-card">
                            <a href="#" className="courses__card-link">
                                <div className="courses__card-content">
                                    <p className="courses__card-badge">
                                        Design
                                    </p>
                                    <p className="courses__card-tag">
                                        Graphic Design Basic
                                    </p>
                                    <div className="courses__card-info">
                                        <p className="courses__card-price">
                                            $500
                                        </p>
                                        <div className="contain__divider">
                                            <div className="vertical-divider"></div>
                                        </div>
                                        <p className="courses__card-speaker">
                                            by Guy Hawkins
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses;