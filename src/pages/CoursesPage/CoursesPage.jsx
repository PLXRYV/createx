import CoursesMain from "./components/CoursesMain.jsx";
import CoursesAbout from "./components/CoursesAbout.jsx";

import '/src/pages/style/style.scss';

function CoursesPage () {
    return (
        <div>
            <CoursesMain/>
            <CoursesAbout/>
        </div>
    )
}

export default CoursesPage;