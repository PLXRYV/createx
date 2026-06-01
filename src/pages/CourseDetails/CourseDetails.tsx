import '@assets/style/style.scss';

import Footer from '@components/common/Footer/Footer';
import CourseCurator from '@pages/CourseDetails/components/CourseCurator/CourseCurator';
import CourseMainSteps from '@pages/CourseDetails/components/CourseMainSteps/CourseMainSteps';
import React from 'react';

import CourseAbout from './components/CourseAbout/CourseAbout';
import CourseMain from './components/CourseMain/CourseMain';

const CourseDetails: React.FC = () => {
  return (
    <div>
      <main>
        <CourseMain />
        <CourseAbout />
        <CourseCurator />
        <CourseMainSteps />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
