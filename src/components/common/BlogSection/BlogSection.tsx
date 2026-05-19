import React from 'react';
import styles from './Blog.module.scss';

// Импортируем фотографии постов блога как модули для Vite
import postImg1 from '../../../assets/images/common/images/blog/blog_post-1.jpg';
import postImg2 from '../../../assets/images/common/images/blog/blog_post-2.jpg';
import postImg3 from '../../../assets/images/common/images/blog/blog_post-3.jpg';

// Импортируем иконки бейджей типов контента
import badgeMic from '../../../assets/images/common/images/blog/badge_mic.svg';
import badgePlay from '../../../assets/images/common/images/blog/badge_play.svg';
import badgeFile from '../../../assets/images/common/images/blog/badge_file.svg';

// Импортируем системные иконки постов
import calendarIcon from '../../../assets/images/common/images/blog/post_calendar.svg';
import clockIcon from '../../../assets/images/common/images/blog/post_clock.svg';
import arrowIcon from '../../../assets/images/common/images/blog/post_arrow.svg';

// Чистый массив данных для динамического рендеринга постов
const POSTS_DATA = [
    {
        id: 1,
        img: postImg1,
        badgeIcon: badgeMic,
        badgeText: "Podcast",
        direction: "Marketing",
        date: "September 4, 2025",
        time: "36 min",
        title: "What is traffic arbitrage and does it really make money?",
        desc: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
        actionText: "Listen"
    },
    {
        id: 2,
        img: postImg2,
        badgeIcon: badgePlay,
        badgeText: "Video",
        direction: "Management",
        date: "August 25, 2025",
        time: "45 min",
        title: "What to do and who to talk to if you want to get feedback on the product",
        desc: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
        actionText: "Watch"
    },
    {
        id: 3,
        img: postImg3,
        badgeIcon: badgeFile,
        badgeText: "Article",
        direction: "Design",
        date: "August 8, 2025",
        time: null, // У третьей статьи времени в вашей разметке не было
        title: "Should you choose a creative profession if you are attracted to creativity?",
        desc: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
        actionText: "Read"
    }
];

const BlogSection: React.FC = () => {
    return (
        <section id="blog" className={styles.blogSection}>
            <div className="container"> {/* Глобальный класс пишем строкой */}

                {/* Шапка секции */}
                <div className={styles.blogContainer}>
                    <div className={styles.blogHeader}>
                        <p className={styles.blogHeaderSubtitle}>OUR BLOG</p>
                        <h2 className={styles.blogHeaderTitle}>Latest posts</h2>
                    </div>
                    <button type="button" className={styles.buttonPrimary}>Go to blog</button>
                </div>

                {/* Сетка блогов, отрисованная через чистый метод .map() */}
                <div className={styles.blogContent}>
                    {POSTS_DATA.map((post) => (
                        <div key={post.id} className={styles.blogPost}>

                            {/* Блок изображения с бейджиком сверху */}
                            <div className={styles.blogPostImage}>
                                <img className={styles.postImage} src={post.img} alt={post.title}/>
                                <div className={styles.postImageBadge}>
                                    <img className={styles.badgeImage} src={post.badgeIcon} alt={post.badgeText}/>
                                    <p className={styles.badgeText}>{post.badgeText}</p>
                                </div>
                            </div>

                            {/* Мета-информация (Направление, Дата, Время) */}
                            <div className={styles.blogPostInfo}>
                                <p className={styles.postDirection}>{post.direction}</p>

                                <div className={styles.containDivider}>
                                    <div className={styles.verticalDivider}></div>
                                </div>

                                <img className={styles.imageCalendar} src={calendarIcon} alt="Calendar icon"/>
                                <time className={styles.postDate}>{post.date}</time>

                                {/* Условие: если у поста есть время прочтения, рендерим блок часов */}
                                {post.time && (
                                    <>
                                        <div className={styles.containDivider}>
                                            <div className={styles.verticalDivider}></div>
                                        </div>
                                        <img className={styles.imageClock} src={clockIcon} alt="Clock icon"/>
                                        <time className={styles.postTime}>{post.time}</time>
                                    </>
                                )}
                            </div>

                            {/* Заголовок и Текст поста */}
                            <div className={styles.blogPostText}>
                                <div className={styles.postText}>
                                    <h3 className={styles.postTitle}>{post.title}</h3>
                                    <p className={styles.postDescription}>{post.desc}</p>
                                </div>
                            </div>

                            {/* Ссылка-кнопка в подвале карточки */}
                            <div className={styles.blogPostFooter}>
                                <a href="#" className={styles.blogPostLink}>
                                    <p className={styles.postFooterText}>{post.actionText}</p>
                                    <img className={styles.postArrow} src={arrowIcon} alt="Arrow link icon"/>
                                </a>
                            </div>

                        </div>
                    ))}
                </div> {/* Конец сетки blogContent */}

            </div> {/* Конец глобального container */}
        </section>
    );
};

export default BlogSection;
