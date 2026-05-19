import React from 'react';
// 1. Импортируем сквозные компоненты сайта из глобальной папки common
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

// 2. Исправляем пути к локальным компонентам этой страницы (убираем .jsx)
import CourseMain from './components/CourseMain/CourseMain.tsx'; // Проверьте, лежат ли они в личных папках
import CourseAbout from './components/CourseAbout/CourseAbout.tsx';

// 3. Исправляем импорт глобальных стилей (без косой черты в начале)
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
