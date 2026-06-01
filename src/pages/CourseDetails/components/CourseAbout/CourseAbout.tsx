import '/src/assets/style/style.scss';

import { Check } from '@assets/images/courseDetails';
import ButtonPrimary from '@components/ui/ButtonPrimary/ButtonPrimary';
import React from 'react';

import styles from './CourseAbout.module.scss';

const CourseAbout: React.FC = () => {
  return (
    <section className={styles.aboutCourseSection}>
      <div className="container">
        <div className={styles.aboutCourseBox}>
          <div className={styles.aboutCourse}>
            <div className={styles.aboutCourseTextContainer}>
              <article className={styles.aboutCourseDescriptionBox}>
                <h2 className={styles.courseDescriptionTitle}>About the course</h2>
                <p className={styles.courseDescriptionText}>
                  Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue
                  in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at
                  elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat
                  senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna
                  aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt
                  tortor, mi nulla pellentesque
                </p>
              </article>
              <div className={styles.aboutCourseLearn}>
                <h2 className={styles.courseLearnTitle}>You will learn:</h2>
                <ul className={styles.courseLearnList}>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>A fermentum in morbi pretium aliquam adipiscing donec tempus.</span>
                  </li>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>Vulputate placerat amet pulvinar lorem nisl.</span>
                  </li>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>
                      Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                    </span>
                  </li>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>Etiam duis lobortis in fames ultrices commodo nibh.</span>
                  </li>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>Fringilla in nec risus congue venenatis pretium posuere nec.</span>
                  </li>
                  <li className={styles.courseLearnListItem}>
                    <Check />
                    <span>Cursus eu pretium, vulputate tempus quam massa sed at.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <aside className={styles.courseDiscriptionContainer}>
            <div className={styles.courseDates}>
              <h3>Dates</h3>
              <time dateTime="2026-09-07/2026-11-02">Sept 7 - Nov 2</time>
              <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
            </div>
            <div className={styles.courseDuration}>
              <h3>DURATION</h3>
              <p>2 months - 8 lessons</p>
              <p>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
            </div>
            <div className={styles.coursePrice}>
              <h3>PRICE</h3>
              <p className={styles.priceValue}>$120 per month</p>
              <p>
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit
                tristique dis.
              </p>
            </div>
            <ButtonPrimary>Join the course</ButtonPrimary>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CourseAbout;
