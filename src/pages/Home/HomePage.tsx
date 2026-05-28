import BlogSection from '@components/common/BlogSection/BlogSection';

import CertificateSection from '../../components/common/CertificateSection/CertificateSection';
import EventsSection from '../../components/common/EventsSection/EventsSection';
import Footer from '../../components/common/Footer/Footer';
import Subscribe from '../../components/common/Subscribe/Subscribe';
import TeamSection from '../../components/common/TeamSection/TeamSection';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Courses from './components/Courses/Courses';
import HeroWrapper from './components/Hero/HeroWrapper';

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
      <BlogSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
