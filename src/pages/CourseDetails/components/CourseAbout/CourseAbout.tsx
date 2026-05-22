import React from 'react';
import styles from './CourseAbout.module.scss';

const CourseAbout: React.FC = () => {
    return (
        <section className={styles.aboutCourseSection}>
            <div className="container">
                <div className={styles.aboutCourse}>
                    <div className={styles.aboutCourseTextContainer}>
                        <div className={styles.aboutCourseDescriptionBox}>
                            <h2 className={styles.courseDescriptionTitle}>About the course</h2>
                            <p className={styles.courseDescriptionText}>
                                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
                                Leo aenean congue in sagittis, felis maecenas amet varius at.
                                Pellentesque euismod in faucibus at elementum. Tellus maecenas
                                libero est tempus sit cras at malesuada diam. Consequat senectus
                                dictumst non hac dignissim montes, pretium, egestas molestie.
                                Sed magna aliquet ornare nibh vel lectus diam eget pretium.
                                Lorem risus nunc tincidunt tortor, mi nulla pellentesque
                            </p>
                        </div>
                        <div className={styles.aboutCourseLearn}>
                            <h2 className={styles.courseLearnTitle}>You will learn:</h2>
                            <ul className={styles.courseLearnList}>
                                <li className={styles.courseLearnListItem}>
                                    A fermentum in morbi pretium aliquam adipiscing donec tempus.
                                </li>
                                <li className={styles.courseLearnListItem}>
                                    Vulputate placerat amet pulvinar lorem nisl.
                                </li>
                                <li className={styles.courseLearnListItem}>
                                    Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                                </li>
                                <li className={styles.courseLearnListItem}>
                                    Etiam duis lobortis in fames ultrices commodo nibh.
                                </li>
                                <li className={styles.courseLearnListItem}>
                                    Fringilla in nec risus congue venenatis pretium posuere nec.
                                </li>
                                <li className={styles.courseLearnListItem}>
                                    Cursus eu pretium, vulputate tempus quam massa sed at.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseAbout;
