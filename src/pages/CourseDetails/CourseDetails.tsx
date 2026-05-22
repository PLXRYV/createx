import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import CourseMain from './components/CourseMain/CourseMain.tsx';
import CourseAbout from './components/CourseAbout/CourseAbout.tsx';

import '../../assets/style/style.scss';

const CourseDetails: React.FC = () => {
    return (
        <div>
            {/* Шапка сайта */}
            <Header />

            {/* Контент страницы курса */}
            <main>
                <CourseMain />
                <CourseAbout />
            </main>

            {/* Подвал сайта */}
            <Footer />
        </div>
    );
};

export default CourseDetails;
