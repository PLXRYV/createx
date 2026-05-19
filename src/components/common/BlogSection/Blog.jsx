import './blog.scss'

const Blog = () => {
    return (
        <section id="blog" className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.blog__container}>
                    <div className={styles.blog__header}>
                        <h6 className={styles.blog__header-text}>
                            <span>OUR BLOG</span>
                            Latest posts
                        </h6>
                    </div>
                    <button className={styles.button__primary}>Go to blog</button>
                </div>
                <div className={styles.blog__content}>
                    <div className={styles.blog__post}>
                        <div className={styles.blog__post-image}>
                            <img className={styles.post__image} src="/src/assets/images/blog/blog_post-1.jpg" alt="blog image"/>
                            <div className={styles.post__image-badge}>
                                <img className={styles.badge__image} src="/src/assets/images/blog/badge_mic.svg" alt="image badge"/>
                                <p className={styles.badge__text}>
                                    Podcast
                                </p>
                            </div>
                        </div>
                        <div className={styles.blog__post-info}>
                            <p className={styles.post__direction}>
                                Marketing
                            </p>
                            <div className={styles.contain__divider}>
                                <div className={styles.vertical-divider}></div>
                            </div>
                            <img className={styles.image__calendar} src="/src/assets/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className={styles.post__date}>
                                September 4, 2025
                            </time>
                            <div className={styles.contain__divider}>
                                <div className={styles.vertical-divider}></div>
                            </div>
                            <img className={styles.image__clock} src="/src/assets/images/blog/post_clock.svg" alt="image clock"/>
                            <time className={styles.post__time}>
                                36 min
                            </time>
                        </div>
                        <div className={styles.blog__post-text}>
                            <p className={styles.post__text}>
                                <span>What is traffic arbitrage and does it really make money?</span>
                                Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim
                                lacus, purus gravida...
                            </p>
                        </div>
                        <div className={styles.blog__post-footer}>
                            <a href="#" className={styles.blog__post-link}>
                                <p className={styles.post__footer-text}>
                                    Listen
                                </p>
                                <img className={styles.post__arrow} src="/src/assets/images/blog/post_arrow.svg" data-svg-fill="false"
                                     alt="image arrow"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.blog__post}>
                        <div className={styles.blog__post-image}>
                            <img className={styles.post__image} src="/src/assets/images/blog/blog_post-2.jpg" alt="blog image"/>
                            <div className={styles.post__image-badge}>
                                <img className={styles.badge__image} src="/src/assets/images/blog/badge_play.svg" alt="image badge"/>
                                <p className={styles.badge__text}>
                                    Video
                                </p>
                            </div>
                        </div>
                        <div className={styles.blog__post-info}>
                            <p className={styles.post__direction}>
                                Management
                            </p>
                            <div className={styles.contain__divider}>
                                <div className={styles.vertical-divider}></div>
                            </div>
                            <img className={styles.image__calendar} src="/src/assets/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className={styles.post__date}>
                                August 25, 2025
                            </time>
                            <div className={styles.contain__divider}>
                                <div className={styles.vertical-divider}></div>
                            </div>
                            <img className={styles.image__clock} src="/src/assets/images/blog/post_clock.svg" alt="image clock"/>
                            <time className={styles.post__time}>
                                45 min
                            </time>
                        </div>
                        <div className={styles.blog__post-text}>
                            <p className={styles.post__text}>
                                <span>What to do and who to talk to if you want to get feedback on the product</span>
                                Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna
                                sagittis faucibus...
                            </p>
                        </div>
                        <div className={styles.blog__post-footer}>
                            <a href="#" className={styles.blog__post-link}>
                                <p className={styles.post__footer-text}>
                                    Watch
                                </p>
                                <img className={styles.post__arrow} src="/src/assets/images/blog/post_arrow.svg" data-svg-fill="false"
                                     alt="image arrow"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.blog__post}>
                        <div className={styles.blog__post-image}>
                            <img className={styles.post__image} src="/src/assets/images/blog/blog_post-3.jpg" alt="blog image"/>
                            <div className={styles.post__image-badge}>
                                <img className={styles.badge__image} src="/src/assets/images/blog/badge_file.svg" alt="image badge"/>
                                <p className={styles.badge__text}>
                                    Article
                                </p>
                            </div>
                        </div>
                        <div className={styles.blog__post-info}>
                            <p className={styles.post__direction}>
                                Design
                            </p>
                            <div className={styles.contain__divider}>
                                <div className={styles.vertical-divider}></div>
                            </div>
                            <img className={styles.image__calendar} src="/src/assets/images/blog/post_calendar.svg"
                                 alt="image calendar"/>
                            <time className={styles.post__date}>
                                August 8, 2025
                            </time>
                        </div>
                        <div className={styles.blog__post-text}>
                            <p className={styles.post__text}>
                                <span>Should you choose a creative profession if you are attracted to creativity?</span>
                                Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed
                                vulputate ultrices...
                            </p>
                        </div>
                        <div className={styles.blog__post-footer}>
                            <a href="#" className={styles.blog__post-link}>
                                <p className={styles.post__footer-text}>
                                    Read
                                </p>
                                <img className={styles.post__arrow} src="/src/assets/images/blog/post_arrow.svg" data-svg-fill="false"
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