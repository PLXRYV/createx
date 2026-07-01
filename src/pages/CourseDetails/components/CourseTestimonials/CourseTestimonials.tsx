import CourseBackgroundTestimonials from '@assets/images/courseDetails/CourseBackgroundTestimonials.png';
import TestimonialsSection from '@components/common/TestimonialsSection/TestimonialsSection';
import React from 'react';

import styles from './CourseTestimonials.module.scss';
import CourseTestimonialsForm from './CourseTestimonialsForm';

const CourseTestimonials: React.FC = () => {
  return (
    <section
      className={styles.courseTestimonials}
      style={{ '--bg-url': `url(${CourseBackgroundTestimonials})` } as React.CSSProperties}
    >
      <TestimonialsSection />
      <CourseTestimonialsForm />
    </section>
  );
};

export default CourseTestimonials;
