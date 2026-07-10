import {
  BadgeFile,
  BadgeMic,
  BadgePlay,
  BlogPostFirst,
  BlogPostSecond,
  BlogPostThird,
  PostArrow,
  PostCalendar,
  PostClock,
} from '@assets/images/common/blog';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Blog.module.scss';

const POSTS_DATA = [
  {
    id: 1,
    img: BlogPostFirst,
    badgeIcon: BadgeMic,
    badgeText: 'Podcast',
    direction: 'Marketing',
    date: 'September 4, 2025',
    time: '36 min',
    title: 'What is traffic arbitrage and does it really make money?',
    desc: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    actionText: 'Listen',
  },
  {
    id: 2,
    img: BlogPostSecond,
    badgeIcon: BadgePlay,
    badgeText: 'Video',
    direction: 'Management',
    date: 'August 25, 2025',
    time: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    desc: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    actionText: 'Watch',
  },
  {
    id: 3,
    img: BlogPostThird,
    badgeIcon: BadgeFile,
    badgeText: 'Article',
    direction: 'Design',
    date: 'August 8, 2025',
    time: null,
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    desc: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    actionText: 'Read',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className="container">
        <div className={styles.blogContainer}>
          <div className={styles.blogHeader}>
            <p className={styles.blogHeaderSubtitle}>OUR BLOG</p>
            <h2 className={styles.blogHeaderTitle}>Latest posts</h2>
          </div>
          <Link to="/blog">
            <ButtonPrimary type="button" className={styles.buttonPrimary}>
              Go to blog
            </ButtonPrimary>
          </Link>
        </div>
        <div className={styles.blogContent}>
          {POSTS_DATA.map((post) => {
            const BadgeIconComponent = post.badgeIcon;

            return (
              <div key={post.id} className={styles.blogPost}>
                <div className={styles.blogPostImage}>
                  <img className={styles.postImage} src={post.img} alt={post.title} />
                  <div className={styles.postImageBadge}>
                    <BadgeIconComponent className={styles.badgeImage} />
                    <p className={styles.badgeText}>{post.badgeText}</p>
                  </div>
                </div>
                <div className={styles.blogPostInfo}>
                  <p className={styles.postDirection}>{post.direction}</p>
                  <div className={styles.containDivider}>
                    <div className={styles.verticalDivider}></div>
                  </div>
                  <PostCalendar className={styles.imageCalendar} />
                  <time className={styles.postDate}>{post.date}</time>
                  {post.time && (
                    <>
                      <div className={styles.containDivider}>
                        <div className={styles.verticalDivider}></div>
                      </div>
                      <PostClock className={styles.imageClock} />
                      <time className={styles.postTime}>{post.time}</time>
                    </>
                  )}
                </div>
                <div className={styles.blogPostText}>
                  <div className={styles.postText}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postDescription}>{post.desc}</p>
                  </div>
                </div>
                <div className={styles.blogPostFooter}>
                  <Link to={`/blog/${post.id}`} className={styles.blogPostLink}>
                    <p className={styles.postFooterText}>{post.actionText}</p>
                    <PostArrow className={styles.postArrow} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
