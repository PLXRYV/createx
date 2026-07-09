import BlogSection from '@components/common/BlogSection/BlogSection';
import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import Subscribe from '@components/common/Subscribe/Subscribe';
import AboutProcess from '@pages/AboutDetails/components/AboutProcess/AboutProcess';
import AboutStudents from '@pages/AboutDetails/components/AboutStudents/AboutStudents';

import AboutCore from './components/AboutCore/AboutCore';
import AboutDirections from './components/AboutDirections/AboutDirections';
import AboutMain from './components/AboutMain/AboutMain';
import AboutTeam from './components/AboutTeam/AboutTeam';
import AboutVideo from './components/AboutVideo/AboutVideo';

const AboutDetails = () => {
  return (
    <div>
      <Header />
      <AboutMain />
      <AboutVideo />
      <AboutCore />
      <AboutDirections />
      <AboutProcess />
      <AboutTeam />
      <AboutStudents />
      <BlogSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutDetails;
