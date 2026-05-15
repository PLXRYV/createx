import './blog.scss'

const Blog = () => {
    return (
        <section id="blog" className="blog">
            <div className="container">
                <div className="blog__container">
                    <div className="blog__header">
                        <h6 className="blog__header-text">
                            <span>OUR BLOG</span>
                            Latest posts
                        </h6>
                    </div>
                    <button className="button__primary">Go to blog</button>
                </div>
                <div className="blog__content">
                    <div className="blog__post">
                        <div className="blog__post-image">
                            <img className="post__image" src="/src/images/blog/blog_post-1.jpg" alt="blog image"/>
                            <div className="post__image-badge">
                                <img className="badge__image" src="/src/images/blog/badge_mic.svg" alt="image badge"/>
                                <p className="badge__text">
                                    Podcast
                                </p>
                            </div>
                        </div>
                        <div className="blog__post-info">
                            <p className="post__direction">
                                Marketing
                            </p>
                            <div className="contain__divider">
                                <div className="vertical-divider"></div>
                            </div>
                            <img className="image__calendar" src="/src/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className="post__date">
                                September 4, 2025
                            </time>
                            <div className="contain__divider">
                                <div className="vertical-divider"></div>
                            </div>
                            <img className="image__clock" src="/src/images/blog/post_clock.svg" alt="image clock"/>
                            <time className="post__time">
                                36 min
                            </time>
                        </div>
                        <div className="blog__post-text">
                            <p className="post__text">
                                <span>What is traffic arbitrage and does it really make money?</span>
                                Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim
                                lacus, purus gravida...
                            </p>
                        </div>
                        <div className="blog__post-footer">
                            <a href="#" className="blog__post-link">
                                <p className="post__footer-text">
                                    Listen
                                </p>
                                <img className="post__arrow" src="/src/images/blog/post_arrow.svg" data-svg-fill="false"
                                     alt="image arrow"/>
                            </a>
                        </div>
                    </div>
                    <div className="blog__post">
                        <div className="blog__post-image">
                            <img className="post__image" src="/src/images/blog/blog_post-2.jpg" alt="blog image"/>
                            <div className="post__image-badge">
                                <img className="badge__image" src="/src/images/blog/badge_play.svg" alt="image badge"/>
                                <p className="badge__text">
                                    Video
                                </p>
                            </div>
                        </div>
                        <div className="blog__post-info">
                            <p className="post__direction">
                                Management
                            </p>
                            <div className="contain__divider">
                                <div className="vertical-divider"></div>
                            </div>
                            <img className="image__calendar" src="/src/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className="post__date">
                                August 25, 2025
                            </time>
                            <div className="contain__divider">
                                <div className="vertical-divider"></div>
                            </div>
                            <img className="image__clock" src="/src/images/blog/post_clock.svg" alt="image clock"/>
                            <time className="post__time">
                                45 min
                            </time>
                        </div>
                        <div className="blog__post-text">
                            <p className="post__text">
                                <span>What to do and who to talk to if you want to get feedback on the product</span>
                                Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna
                                sagittis faucibus...
                            </p>
                        </div>
                        <div className="blog__post-footer">
                            <a href="#" className="blog__post-link">
                                <p className="post__footer-text">
                                    Watch
                                </p>
                                <img className="post__arrow" src="/src/images/blog/post_arrow.svg" data-svg-fill="false"
                                     alt="image arrow"/>
                            </a>
                        </div>
                    </div>
                    <div className="blog__post">
                        <div className="blog__post-image">
                            <img className="post__image" src="/src/images/blog/blog_post-3.jpg" alt="blog image"/>
                            <div className="post__image-badge">
                                <img className="badge__image" src="/src/images/blog/badge_file.svg" alt="image badge"/>
                                <p className="badge__text">
                                    Article
                                </p>
                            </div>
                        </div>
                        <div className="blog__post-info">
                            <p className="post__direction">
                                Design
                            </p>
                            <div className="contain__divider">
                                <div className="vertical-divider"></div>
                            </div>
                            <img className="image__calendar" src="/src/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className="post__date">
                                August 8, 2025
                            </time>
                        </div>
                        <div className="blog__post-text">
                            <p className="post__text">
                                <span>Should you choose a creative profession if you are attracted to creativity?</span>
                                Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed
                                vulputate ultrices...
                            </p>
                        </div>
                        <div className="blog__post-footer">
                            <a href="#" className="blog__post-link">
                                <p className="post__footer-text">
                                    Read
                                </p>
                                <img className="post__arrow" src="/src/images/blog/post_arrow.svg" data-svg-fill="false"
                                     alt="image arrow"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;