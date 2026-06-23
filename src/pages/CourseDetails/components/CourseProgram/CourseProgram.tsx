import { ProgramIllustration } from '@assets/images/courseDetails';
import React, { useState } from 'react';

import styles from './CourseProgram.module.scss';

const LESSONS_DATA = [
  {
    id: 1,
    title: 'Aliquet lectus urna viverra in odio.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 2,
    title: 'Orci commodo, viverra orci mollis ut euismod.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 3,
    title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 4,
    title: 'In id dolor quis nunc, urna hendrerit pharetra.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 5,
    title: 'Est, ut tempus id rutrum facilisi.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 6,
    title: 'Amet nec in pellentesque.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 7,
    title: 'Massa vel arcu mauris, id vel rhoncus mattis quis.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
  {
    id: 8,
    title: 'Neque, cursus sapien nullam id.',
    content:
      'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.',
  },
];

const CourseProgram: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<number | null>(1);

  const toggleLesson = (id: number) => {
    setActiveLessonId(activeLessonId === id ? null : id);
  };

  return (
    <section className={styles.courseProgram}>
      <div className="container">
        <div className={styles.courseProgramHeader}>
          <div className={styles.coursesProgram}>
            <h5>Course program</h5>
            <h2>What will you learn</h2>
            <ul className={styles.courseProgramsList}>
              {LESSONS_DATA.map((lesson) => {
                const isOpen = activeLessonId === lesson.id;

                return (
                  <li
                    key={lesson.id}
                    className={`${styles.courseProgramLesson} ${isOpen ? styles.courseProgramLessonActive : ''}`}
                  >
                    <button
                      type="button"
                      className={styles.lessonTrigger}
                      onClick={() => toggleLesson(lesson.id)}
                    >
                      <div className={styles.courseProgramDivider}></div>
                      <span className={styles.courseProgramLessonCounter}>Lesson {lesson.id}.</span>
                      <span className={styles.courseProgramLessonTitle}>{lesson.title}</span>
                    </button>
                    {isOpen && (
                      <p className={styles.courseProgramLessonSubtitle}>{lesson.content}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.courseProgramImage}>
            <ProgramIllustration className={styles.programImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
