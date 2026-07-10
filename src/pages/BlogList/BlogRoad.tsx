import {
  ArrowRightGray,
  ArrowRightPrimary,
  CalendarImage,
  ClockImage,
  FilesImage,
  ImageBlogEighth,
  ImageBlogFifth,
  ImageBlogFirst,
  ImageBlogFourth,
  ImageBlogSecond,
  ImageBlogSeventh,
  ImageBlogSixth,
  ImageBlogThird,
  MicImage,
  PlayImage,
  SearchImage,
} from '@assets/images/blogList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './BlogList.module.scss';

export interface PostItem {
  id: number;
  img: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  badgeText: string;
  direction: string;
  date: string;
  time: string | null;
  title: string;
  desc: string;
  actionText: string;
}

export const POSTS_DATA: PostItem[] = [
  {
    id: 1,
    img: ImageBlogFirst,
    badgeIcon: MicImage,
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
    img: ImageBlogSecond,
    badgeIcon: FilesImage,
    badgeText: 'Article',
    direction: 'Development',
    date: 'September 1, 2025',
    time: null,
    title: 'How to choose the first programming language for a beginner',
    desc: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    actionText: 'Read',
  },
  {
    id: 3,
    img: ImageBlogThird,
    badgeIcon: PlayImage,
    badgeText: 'Video',
    direction: 'Design',
    date: 'August 8, 2025',
    time: '40 min',
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    desc: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    actionText: 'Watch',
  },
  {
    id: 4,
    img: ImageBlogFourth,
    badgeIcon: FilesImage,
    badgeText: 'Article',
    direction: 'HR & Recruiting',
    date: 'August 3, 2025',
    time: null,
    title: 'HR statistics: job search, interviews, hiring and recruiting',
    desc: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
    actionText: 'Read',
  },
  {
    id: 5,
    img: ImageBlogFifth,
    badgeIcon: PlayImage,
    badgeText: 'Video',
    direction: 'Management',
    date: 'August 2, 2025',
    time: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    desc: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
    actionText: 'Watch',
  },
  {
    id: 6,
    img: ImageBlogSixth,
    badgeIcon: MicImage,
    badgeText: 'Podcast',
    direction: 'Design',
    date: 'July 28, 2025',
    time: '36 min',
    title: 'What are color profiles and how they work in graphic design',
    desc: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    actionText: 'Listen',
  },
  {
    id: 7,
    img: ImageBlogSeventh,
    badgeIcon: PlayImage,
    badgeText: 'Video',
    direction: 'Management',
    date: 'July 15, 2025',
    time: '45 min',
    title: 'Startup: how to build a team that will live longer than a year',
    desc: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
    actionText: 'Watch',
  },
  {
    id: 8,
    img: ImageBlogEighth,
    badgeIcon: FilesImage,
    badgeText: 'Article',
    direction: 'Marketing',
    date: 'July 9, 2025',
    time: null,
    title: 'How to get customers to love your business from the start',
    desc: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
    actionText: 'Read',
  },
];

const badges = [MicImage, FilesImage, PlayImage];
const badgeTexts = ['Podcast', 'Article', 'Video'];
const directions = ['Marketing', 'Development', 'Design', 'HR & Recruiting', 'Management'];
const images = [
  ImageBlogFirst,
  ImageBlogSecond,
  ImageBlogThird,
  ImageBlogFourth,
  ImageBlogFifth,
  ImageBlogSixth,
  ImageBlogSeventh,
  ImageBlogEighth,
];
const actions = ['Listen', 'Read', 'Watch'];

for (let i = 9; i <= 32; i++) {
  const randIndex = i % 3;
  const dirIndex = i % 5;
  const imgIndex = i % 8;

  POSTS_DATA.push({
    id: i,
    img: images[imgIndex],
    badgeIcon: badges[randIndex],
    badgeText: badgeTexts[randIndex],
    direction: directions[dirIndex],
    date: `July ${(i % 28) + 1}, 2025`,
    time: randIndex === 1 ? null : `${30 + (i % 20)} min`,
    title: `Premium School Journal Post Vol. ${i}: Core Insights and Expert Guidelines.`,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    actionText: actions[randIndex],
  });
}

const BlogRoad: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredPosts = POSTS_DATA.filter((post) => {
    const matchesType = activeType === 'All' || post.badgeText === activeType;
    const matchesCategory = selectedCategory === 'all' || post.direction === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  const postsPerPage = 8;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPagePosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchInputValue);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <section className={styles.blogRoadSection}>
      <div className="container">
        <div className={styles.blogMainHeaderWrapper}>
          <div className={styles.blogRoadHeader}>
            <h5 className={styles.blogSubtitle}>Our blog</h5>
            <h2 className={styles.blogTitle}>Createx School Journal</h2>
          </div>
        </div>

        <div className={styles.blogFilteringContainer}>
          <nav className={styles.typeNavigation} aria-label="Filter by content type">
            <ul className={styles.typeNavigationList}>
              <li>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${activeType === 'All' ? styles.typeBtnActive : ''}`}
                  onClick={() => {
                    setActiveType('All');
                    setCurrentPage(1);
                  }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${activeType === 'Article' ? styles.typeBtnActive : ''}`}
                  onClick={() => {
                    setActiveType('Article');
                    setCurrentPage(1);
                  }}
                >
                  <FilesImage className={styles.typeIcon} /> Articles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${activeType === 'Video' ? styles.typeBtnActive : ''}`}
                  onClick={() => {
                    setActiveType('Video');
                    setCurrentPage(1);
                  }}
                >
                  <PlayImage className={styles.typeIcon} /> Videos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${activeType === 'Podcast' ? styles.typeBtnActive : ''}`}
                  onClick={() => {
                    setActiveType('Podcast');
                    setCurrentPage(1);
                  }}
                >
                  <MicImage className={styles.typeIcon} /> Podcasts
                </button>
              </li>
            </ul>
          </nav>

          <nav className={styles.categoryNavigation} aria-label="Filter by category and search">
            <ul className={styles.categoryNavigationList}>
              <li className={styles.selectFilterItem}>
                <p className={styles.selectLabel}>Blog category</p>
                <select
                  className={styles.blogSelect}
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="all">all themes</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Development">Development</option>
                  <option value="HR & Recruiting">HR & Recruiting</option>
                  <option value="Management">Management</option>
                </select>
              </li>
              <li className={styles.searchFilterItem}>
                <form className={styles.blogSearchForm} onSubmit={handleSearchSubmit}>
                  <input
                    type="search"
                    className={styles.blogSearchInput}
                    placeholder="Search blog..."
                    value={searchInputValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchInputValue(value);
                      if (value.trim() === '') {
                        setSearchQuery('');
                        setCurrentPage(1);
                      }
                    }}
                  />
                  <button className={styles.blogSearchBtn} type="submit">
                    <SearchImage />
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.blogRowsContainer}>
          {currentPagePosts.length === 0 ? (
            <div className={styles.noPosts}>No articles found matching your criteria.</div>
          ) : (
            <>
              <div className={styles.blogStandardGrid}>
                {currentPagePosts.slice(0, 3).map((post) => {
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
                          <CalendarImage className={styles.imageCalendar} />
                          <time className={styles.postDate}>{post.date}</time>
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

              <div className={styles.blogMiddleRow}>
                {currentPagePosts.slice(3, 4).map((post) => {
                  const BadgeIconComponent = post.badgeIcon;
                  return (
                    <div key={post.id} className={styles.blogHorizontalCard}>
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
                          <CalendarImage className={styles.imageCalendar} />
                          <time className={styles.postDate}>{post.date}</time>
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

                {currentPagePosts.slice(4, 5).map((post) => {
                  const BadgeIconComponent = post.badgeIcon;
                  return (
                    <div key={post.id} className={styles.blogWideCard}>
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
                          <CalendarImage className={styles.imageCalendar} />
                          <time className={styles.postDate}>{post.date}</time>
                          {post.time && (
                            <>
                              <div className={styles.containDivider}>
                                <div className={styles.verticalDivider}></div>
                              </div>
                              <ClockImage className={styles.imageClock} />
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

              <div className={styles.blogStandardGrid}>
                {currentPagePosts.slice(5, 8).map((post) => {
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
                          <CalendarImage className={styles.imageCalendar} />
                          <time className={styles.postDate}>{post.date}</time>
                          {post.time && (
                            <>
                              <div className={styles.containDivider}>
                                <div className={styles.verticalDivider}></div>
                              </div>
                              <ClockImage className={styles.imageClock} />
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
            </>
          )}
        </div>

        <div className={styles.blogPagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              className={`${styles.paginationPage} ${currentPage === page ? styles.isActive : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className={styles.paginationNextBtn}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ArrowRightGray />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogRoad;
