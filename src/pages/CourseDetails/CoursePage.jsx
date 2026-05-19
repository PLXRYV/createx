import CourseMain from "./components/CourseMain.jsx";
import CourseAbout from "./components/CourseAbout.jsx";

import '/src/pages/style/style.scss';

function CoursePage () {
    return (
        <div>
            <CourseMain/>
            <CourseAbout/>
        </div>
    )
}

export default CoursePage;