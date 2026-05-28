import {
  BenefitsIllustration,
  BenefitsIllustrationSupport,
  Community,
  Feedback,
  Library,
  Tutors,
} from '@assets/images/common/benefits';
import React, { useState } from 'react';

import styles from './Benefits.module.scss';

const Benefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tutors');

  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsHeader}>
            <h6 className={styles.benefitsHeaderTtitle}>
              <span>OUR BENEFITS</span>
              That’s how we do it
            </h6>
          </div>
          <div className={styles.benefitsNavigation}>
            <nav className={styles.benefitsNavigationBar}>
              <button
                className={`${styles.benefitsNavigationLink} ${activeTab === 'tutors' ? styles.isActive : ''}`}
                onClick={() => setActiveTab('tutors')}
                type="button"
              >
                <Tutors className={styles.navigationLinkIcon} />
                Experienced Tutors
              </button>

              <button
                className={`${styles.benefitsNavigationLink} ${activeTab === 'feedback' ? styles.isActive : ''}`}
                onClick={() => setActiveTab('feedback')}
                type="button"
              >
                <Feedback className={styles.navigationLinkIcon} />
                Feedback & Support
              </button>

              <button
                className={`${styles.benefitsNavigationLink} ${activeTab === 'library' ? styles.isActive : ''}`}
                onClick={() => setActiveTab('library')}
                type="button"
              >
                <Library className={styles.navigationLinkIcon} />
                24/7 Online Library
              </button>

              <button
                className={`${styles.benefitsNavigationLink} ${activeTab === 'community' ? styles.isActive : ''}`}
                onClick={() => setActiveTab('community')}
                type="button"
              >
                <Community className={styles.navigationLinkIcon} />
                Community
              </button>
            </nav>
          </div>

          {activeTab === 'tutors' && (
            <div className={`${styles.benefitsContent} ${styles.benefitsContentTutors}`}>
              <div className={styles.benefitsContentBox}>
                <p className={styles.benefitsContentText}>
                  <span>Only practicing tutors</span>
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
                  suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc,
                  sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.
                  Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                </p>
              </div>
              <div className={styles.benefitsContentImgContainer}>
                <img src={BenefitsIllustration} alt="Benefits illustration" />
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className={`${styles.benefitsContent} ${styles.benefitsContentFeedback}`}>
              <div className={styles.benefitsContentImgContainer}>
                <img src={BenefitsIllustrationSupport} alt="Benefits illustration" />
              </div>
              <div className={styles.benefitsContentBox}>
                <p className={styles.benefitsContentText}>
                  <span>Feedback & Support</span>
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
                  suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc,
                  sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.
                  Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'library' && (
            <div className={`${styles.benefitsContent} ${styles.benefitsContentLibrary}`}>
              <div className={styles.benefitsContentBox}>
                <p className={styles.benefitsContentText}>
                  <span>Online Library</span>
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
                  suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc,
                  sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.
                  Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                </p>
              </div>
              <div className={styles.benefitsContentImgContainer}>
                <img src={BenefitsIllustrationSupport} alt="Benefits illustration" />
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div className={`${styles.benefitsContent} ${styles.benefitsContentCommunity}`}>
              <div className={styles.benefitsContentImgContainer}>
                <img src={BenefitsIllustration} alt="Benefits illustration" />
              </div>
              <div className={styles.benefitsContentBox}>
                <p className={styles.benefitsContentText}>
                  <span>Community</span>
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
                  suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc,
                  sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.
                  Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
