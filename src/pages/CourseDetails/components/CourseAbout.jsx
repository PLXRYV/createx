

const CourseAbout = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.AboutCourse}>
                    <div className={styles.AboutCourseTextContainer}>
                        <div className={styles.AboutCourseDescriptionBox}>
                            <h1 className={styles.CourseDescriptionTitle}>About the course</h1>
                            <p className={styles.CourseDescriptionText}>Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque</p>
                        </div>
                        <div className={styles.AboutCourseLearn}>
                            <h1 className={styles.CourseLearnTitle}>You will learn:</h1>
                            <ul className={styles.CourseLearnList}>
                                <li className={styles.CourseLearnListItem}>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                                <li className={styles.CourseLearnListItem}>Vulputate placerat amet pulvinar lorem nisl.</li>
                                <li className={styles.CourseLearnListItem}>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                                <li className={styles.CourseLearnListItem}>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                                <li className={styles.CourseLearnListItem}>Fringilla in nec risus congue venenatis pretium posuere nec.</li>
                                <li className={styles.CourseLearnListItem}>Cursus eu pretium, vulputate tempus quam massa sed at.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseAbout;