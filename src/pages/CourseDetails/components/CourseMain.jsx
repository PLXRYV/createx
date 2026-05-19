import Header from "/src/components/Header/Header";

const CourseMain = () => {
    return (
        <section>
            <div className={styles.courseBackground}>
            <Header/>
                <div className={styles.container}>
                <div className={styles.CourseMain}>
                    <h6 className={styles.CourseMainHeading}>Courses</h6>
                    <h1 className={styles.CourseMainTitle}>User Experience. Principles of Human-Centered Design</h1>
                </div>
            </div>
            </div>
        </section>
    )
}

export default CourseMain;