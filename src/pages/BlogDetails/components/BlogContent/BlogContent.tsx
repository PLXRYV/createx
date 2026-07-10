import {
  AuthorImage,
  CalendarImage,
  Check,
  ClockImage,
  FacebookLogo,
  FilesImage,
  InstagramLogo,
  LinkedInLogo,
  MicImage,
  PlayImage,
  SearchImage,
  TwitterLogo,
} from '@assets/images/BlogDetails';
import { POSTS_DATA } from '@pages/BlogList/BlogRoad';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './BlogContent.module.scss';

const TRENDING_ARTICLES = [
  {
    id: 1,
    date: 'September 4, 2025',
    title: 'What is traffic arbitrage and does it really make money?',
  },
  {
    id: 7,
    date: 'July 15, 2025',
    title: 'Startup: how to build a team that will live longer than a year',
  },
  {
    id: 5,
    date: 'August 2, 2025',
    title: 'What to do and who to talk to if you want to get feedback on the product',
  },
];

const TAGS_DATA = [
  'Worldbuilding',
  'Brand strategy',
  'Recruiting',
  'Advertising',
  'UI/UX',
  'Product development',
];

const BlogContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = POSTS_DATA.find((item) => item.id === Number(id));

  if (!post) {
    return <div className={styles.notFound}>Article not found.</div>;
  }

  return (
    <section className={styles.blogDetailsSection}>
      <div className="container">
        <div className={styles.detailsGrid}>
          <article className={styles.articleContent}>
            <div className={styles.articleMetaHeader}>
              {(() => {
                const BadgeIconComponent = post.badgeIcon;
                return <BadgeIconComponent className={styles.metaBadgeIcon} />;
              })()}
              <span className={styles.metaBadge}>{post.badgeText}</span>
              <span className={styles.metaDivider}>|</span>
              <span className={styles.metaDirection}>{post.direction}</span>
            </div>

            <h1 className={styles.articleTitle}>{post.title}</h1>

            <div className={styles.articleMetaFooter}>
              <div className={styles.metaTimeBlock}>
                <CalendarImage className={styles.metaIcon} />
                <time className={styles.postDate}>{post.date}</time>
                {post.time && (
                  <>
                    <span className={styles.inlineDivider}></span>
                    <ClockImage className={styles.metaIcon} />
                    <time className={styles.postTime}>{post.time}</time>
                  </>
                )}
              </div>
              <div className={styles.shareBlock}>
                <span className={styles.shareLabel}>Share:</span>
                <div className={styles.shareLinks}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <FacebookLogo />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <TwitterLogo />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <LinkedInLogo />
                  </a>
                </div>
              </div>
            </div>

            <figure className={styles.mainImageHolder}>
              <img src={post.img} alt={post.title} className={styles.mainImg} />
            </figure>

            <div className={styles.articleBodyText}>
              <p className={styles.leadParagraph}>
                Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui
                odio. Interdum ac eos sit malesuada ornare sed gravida rhoncus, congue. Purus auctor
                nullam diam quis est hendrerit ac euismod.
              </p>
              <p>
                At facili sapien posuere eget sed, senectus proin nullam. Tortor cras habitant
                sapien, vitae diam nunc dignissim. Vel ac adipiscing eget diam nisl, donec. Aliquam
                vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna
                arcu eleifend elementum.
              </p>
              <p>
                Amet, morbi ante purus eget mi potenti. Condimentum eros elementum leo sed purus
                facilisis. Nisl massa ut sit faucibus et diam. Faucibus at malesuada at justo
                scelerisque in nisi, urna rhoncus. Consectetur donec elementum porta pellentesque
                purus. Aliquam vel aliquam tristique.
              </p>

              <blockquote className={styles.articleQuote}>
                <div className={styles.rectangleBox}>
                  <div className={styles.rectangle}></div>
                  <div className={styles.rectangle}></div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                  viverra mus lobortis fermentum amet, mi. Pulvinar eu sed purus facilisi. Vitae id
                  turpis tempor ornare turpis quis non. Congue tortor in est euismod vulputate etiam
                  eros. Vel accumsan sit aliquet, ipsum.
                </p>
              </blockquote>

              <p>
                Mauris broad arcu sit hendrerit platea. Sed lectus, et sed id varius mattis. Vitae
                habitant in massa, viverra tristique blandit.
              </p>

              <ul className={styles.articleCheckList}>
                <li>
                  <Check className={styles.checkIcon} />
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  </span>
                </li>
                <li>
                  <Check className={styles.checkIcon} />
                  <span>Velit officia consequat duis enim velit mollit. Exercitation veniam.</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} />
                  <span>
                    Consequat fugiat aliquet gravida quisque id bibendum id adipiscing elit.
                  </span>
                </li>
                <li>
                  <Check className={styles.checkIcon} />
                  <span>Adipiscing elit duis tristique sollicitudin commodo id.</span>
                </li>
              </ul>

              <p>
                Enim, vel malesuada diam. Blandit eu massa magna mi morbi ac sit magna, habitant.
                Urna id pretium nullam non vitae elementum. Adipiscing scelerisque convallis viverra
                et. Consectetur facilisi sed porttitor sed phasellus lorem ac suspendisse potenti.
                Nullam sed nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum
                quam.
              </p>
            </div>

            <footer className={styles.articleFooterTags}>
              <div className={styles.bottomTags}>
                <span className={styles.tagsLabel}>Tags:</span>
                <span className={styles.tagItem}>#learning</span>
                <span className={styles.tagItem}>#HR</span>
                <span className={styles.tagItem}>#self-development</span>
              </div>
              <div className={styles.shareBlock}>
                <span className={styles.shareLabel}>Share:</span>
                <div className={styles.shareLinks}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <FacebookLogo />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <TwitterLogo />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <LinkedInLogo />
                  </a>
                </div>
              </div>
            </footer>
          </article>

          <aside className={styles.articleSidebar}>
            <div className={styles.searchWidget}>
              <div className={styles.searchFormWrapper}>
                <input
                  type="search"
                  placeholder="Search blog..."
                  className={styles.sidebarSearchInput}
                />
                <button type="button" className={styles.sidebarSearchBtn} aria-label="Search">
                  <SearchImage />
                </button>
              </div>
            </div>

            <div className={styles.authorWidget}>
              <h4 className={styles.widgetTitle}>Author</h4>
              <div className={styles.authorCard}>
                <img src={AuthorImage} alt="Kristin Watson" className={styles.authorAvatar} />
                <div className={styles.authorMeta}>
                  <h5 className={styles.authorName}>Kristin Watson</h5>
                  <p className={styles.authorRole}>Curator of Marketing Course</p>
                  <div className={styles.authorSocials}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <InstagramLogo />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <TwitterLogo />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <LinkedInLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.trendingWidget}>
              <h4 className={styles.widgetTitle}>Trending Articles</h4>
              <ul className={styles.trendingList}>
                {TRENDING_ARTICLES.map((item) => {
                  const matchingPost = POSTS_DATA.find((p) => p.id === item.id);
                  const thumbImg = matchingPost ? matchingPost.img : '';

                  return (
                    <li key={item.id} className={styles.trendingItem}>
                      <img src={thumbImg} alt={item.title} className={styles.trendingThumb} />
                      <div className={styles.trendingMeta}>
                        <span className={styles.trendingDateBlock}>
                          <CalendarImage className={styles.trendingIcon} />
                          {item.date}
                        </span>
                        <Link to={`/blog/${item.id}`} className={styles.trendingLink}>
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.tagsWidget}>
              <h4 className={styles.widgetTitle}>TAGS</h4>
              <div className={styles.tagsCloud}>
                {TAGS_DATA.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.tagButton} ${tag === 'Recruiting' ? styles.tagButtonActive : ''}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
