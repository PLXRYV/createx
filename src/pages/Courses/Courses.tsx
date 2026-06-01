import CertificateSection from '@components/common/CertificateSection/CertificateSection';
import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import Subscribe from '@components/common/Subscribe/Subscribe';
import TestimonialsSection from '@components/common/TestimonialsSection/TestimonialsSection';
import CoursesMain from '@pages/Courses/components/CoursesMain/CoursesMain';

import styles from './Courses.module.scss';

const Courses = () => {
  return (
    <div>
      <Header />
      <CoursesMain />
      <TestimonialsSection className={styles.coursesPageTestimonials} />
      <CertificateSection className={styles.coursesPageCertificate} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Courses;
