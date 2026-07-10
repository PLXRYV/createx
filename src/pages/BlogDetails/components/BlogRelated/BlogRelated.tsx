import {
  ArrowLeft,
  ArrowRight,
  CalendarImage,
  ClockImage,
  FilesImage,
  MicImage,
  PlayImage,
} from '@assets/images/blogDetails';
import { ArrowRightGray, ArrowRightPrimary } from '@assets/images/blogList';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import { POSTS_DATA } from '@pages/BlogList/BlogRoad';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './BlogRelated.module.scss';

const BlogRelated: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentPostId = Number(id);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const suggestedPosts = POSTS_DATA.filter((post) => post.id !== currentPostId);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? suggestedPosts.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= suggestedPosts.length - 3 ? 0 : prev + 1));
  };

  const visiblePosts = suggestedPosts.slice(currentIndex, currentIndex + 3);

  return (
    <section className={styles.relatedSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.titleBlock}>
            <h5 className={styles.subtitle}>Our blog</h5>
            <h2 className={styles.title}>You may also like</h2>
          </div>
          <div className={styles.sliderArrows}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.arrowBtn}
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={styles.arrowBtn}
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.postsGridWrapper}>
          {visiblePosts.map((post) => {
            const BadgeIconComponent = post.badgeIcon;

            return (
              <div key={post.id} className={styles.blogPostCard}>
                <div className={styles.cardMediaBlock}>
                  <img src={post.img} alt={post.title} className={styles.postCardImg} />
                  <div className={styles.badgeWrapper}>
                    <BadgeIconComponent className={styles.badgeImage} />
                    <p className={styles.badgeText}>{post.badgeText}</p>
                  </div>
                </div>

                <div className={styles.cardContentBlock}>
                  <div className={styles.blogPostInfo}>
                    <p className={styles.postDirection}>{post.direction}</p>
                    <div className={styles.containDivider}>
                      <div className={styles.verticalDivider}></div>
                    </div>
                    <CalendarImage className={styles.imagePostInfo} />
                    <time className={styles.postDate}>{post.date}</time>
                    {post.time && (
                      <>
                        <div className={styles.containDivider}>
                          <div className={styles.verticalDivider}></div>
                        </div>
                        <ClockImage className={styles.imagePostInfo} />
                        <time className={styles.postTime}>{post.time}</time>
                      </>
                    )}
                  </div>

                  <div className={styles.blogPostText}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postDescription}>{post.desc}</p>
                  </div>

                  <div className={styles.blogPostFooter}>
                    <Link to={`/blog/${post.id}`} className={styles.blogPostLink}>
                      <span className={styles.postFooterText}>{post.actionText}</span>
                      <ArrowRightPrimary className={styles.postArrowHover} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.sectionFooter}>
          <p className={styles.footerText}>Do you want more articles, podcasts and videos?</p>
          <Link to="/blog">
            <ButtonPrimary type="button" className={styles.footerBtn}>
              Go to blog
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogRelated;
