import HeroWrapper from './components/Hero/HeroWrapper';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Courses from './components/Courses/Courses';
import CertificateSection from '../../components/common/CertificateSection/CertificateSection';
import TeamSection from '../../components/common/TeamSection/TeamSection';
import TestimonialsSection from '../../components/common/TestimonialsSection/TestimonialsSection';
import BlogSection from '../../components/common/BlogSection/BlogSection';
import EventsSection from '../../components/common/EventsSection/EventsSection';
import Subscribe from '../../components/common/Subscribe/Subscribe';
import Footer from '../../components/common/Footer/Footer.tsx';

const HomePage = () => {
    return (
        <div>
            <HeroWrapper />
            <About />
            <Courses />
            <Benefits />
            <EventsSection />
            <CertificateSection />
            <TeamSection />
            <TestimonialsSection />
            <BlogSection />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default HomePage;