import '@assets/style/style.scss';

import Footer from '@components/common/Footer/Footer';
import CourseCurator from '@pages/CourseDetails/components/CourseCurator/CourseCurator';
import CourseMainSteps from '@pages/CourseDetails/components/CourseMainSteps/CourseMainSteps';
import React from 'react';

import CourseAbout from './components/CourseAbout/CourseAbout';
import CourseMain from './components/CourseMain/CourseMain';
import CourseTimer from './components/CourseTimer/CourseTimer';

const CourseDetails: React.FC = () => {
  return (
    <div>
      <main>
        <CourseMain />
        <CourseAbout />
        <CourseCurator />
        <CourseMainSteps />
        <CourseTimer />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
