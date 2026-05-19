import HeroWrapper from './components/Hero/HeroWrapper'; // Наша обертка шапки и первого экрана

// Локальные компоненты, которые используются ТОЛЬКО на главной странице
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Courses from './components/Courses/Courses';
// Глобальные переиспользуемые секции из папки components/common/
 // Если это секция каталога
import CertificateSection from '../../components/common/CertificateSection/CertificateSection';
import TeamSection from '../../components/common/TeamSection/TeamSection';
import TestimonialsSection from '../../components/common/TestimonialsSection/TestimonialsSection';
import BlogSection from '../../components/common/BlogSection/BlogSection';
import EventsSection from '../../components/common/EventsSection/EventsSection';

// Другие общие компоненты
import Subscribe from '../../components/common/Subscribe/Subscribe';
import Footer from '../../components/common/Footer/Footer.tsx';

const HomePage = () => {
    return (
        <div>
            {/* Обертка с общим фоном, внутри которой уже лежат Header и Hero */}
            <HeroWrapper />

            {/* Секции главной страницы */}
            <About />
            <Courses />
            <Benefits />
            <EventsSection />
            <CertificateSection />
            <TeamSection />
            <TestimonialsSection />
            <BlogSection />
            <Subscribe />

            {/* Подвал сайта (Copyright уже встроен внутрь самого компонента Footer) */}
            <Footer />
        </div>
    );
};

export default HomePage;