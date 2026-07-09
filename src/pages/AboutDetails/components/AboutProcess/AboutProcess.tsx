import IllustrationProcess from '@assets/images/aboutDetails/IllustrationProcess.jpg';
import styles from '@pages/AboutDetails/components/AboutProcess/AboutProcess.module.scss';
import React from 'react';

const PROCESS_STEPS = [
  {
    id: 1,
    step: 'Step 1',
    title: 'Watching online video lectures',
    description:
      'Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.',
  },
  {
    id: 2,
    step: 'Step 2',
    title: 'Passing test',
    description:
      'Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam.',
  },
  {
    id: 3,
    step: 'Step 3',
    title: 'Curator’s feedback',
    description:
      'Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.',
  },
  {
    id: 4,
    step: 'Step 4',
    title: 'Corrections if needed',
    description: 'Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.',
  },
];

const AboutProcess: React.FC = () => {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.processGrid}>
          <div className={styles.contentBlock}>
            <header className={styles.processHeader}>
              <h5 className={styles.processSubtitle}>Studying process</h5>
              <h2 className={styles.processTitle}>That’s how we do it</h2>
            </header>

            <ul className={styles.stepsList}>
              {PROCESS_STEPS.map((item) => (
                <li key={item.id} className={styles.stepItem}>
                  <span className={styles.stepBadge}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDescription}>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageBlock}>
            <figure className={styles.imageHolder}>
              <img
                src={IllustrationProcess}
                alt="Studying process illustration"
                className={styles.processImg}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
