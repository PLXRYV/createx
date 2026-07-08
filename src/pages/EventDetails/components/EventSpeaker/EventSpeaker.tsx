import {
  CirclesImg,
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from '@assets/images/EventDetails';
import DelMarStrategyLogo from '@assets/images/eventDetails/DelMarStrategyLogo.jpg';
import EventSpeakerImage from '@assets/images/eventDetails/EventSpeakerImage.jpg';
import NationalLogo from '@assets/images/eventDetails/NationalLogo.jpg';
import SentinalLogo from '@assets/images/eventDetails/SentinalLogo.jpg';
import styles from '@pages/EventDetails/components/EventSpeaker/EventSpeaker.module.scss';
import { EVENTS_DATA } from '@pages/EventsList/EventsRoad';
import React from 'react';
import { useParams } from 'react-router-dom';

const SPEAKERS_MOCK = [
  { name: 'Jerome Bell', position: 'Founder & CEO at CreateX Agency' },
  { name: 'Marvin McKinney', position: 'PM Team Lead at Google' },
  { name: 'Leslie Alexander Li', position: 'Head of HR at Recruiting Premium' },
  { name: 'Kristin Watson', position: 'Senior Marketing Manager at Spotify' },
  { name: 'Dianne Russell', position: 'Business Development Director' },
  { name: 'Guy Hawkins', position: 'Lead Graphic Designer' },
];

const EventSpeaker: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS_DATA.find((item) => item.id === Number(id));

  const speakerIndex = event ? (event.id - 1) % SPEAKERS_MOCK.length : 0;
  const speaker = SPEAKERS_MOCK[speakerIndex];

  return (
    <section className={styles.courseCuratorSection}>
      <div className="container">
        <div className={styles.curatorGrid}>
          <div className={styles.curatorVisualBlock}>
            <div className={styles.circlesWrapper}>
              <CirclesImg />
            </div>
            <figure className={styles.curatorImageHolder}>
              <img
                src={EventSpeakerImage}
                alt={`Speaker ${speaker.name}`}
                className={styles.curatorPhoto}
              />
            </figure>
          </div>
          <div className={styles.curatorMainInfo}>
            <header className={styles.curatorHeader}>
              <p className={styles.curatorSubtitle}>SPEAKER</p>
              <h2 className={styles.curatorTitle}>{speaker.name}</h2>
            </header>
            <p className={styles.curatorDescription}>
              Analyst and Marketing specialist in IT company
            </p>
            <blockquote className={styles.curatorBio}>
              <p>
                Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur
                venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis
                commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel
                diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id
                habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
                sollicitudin interdum quam.
              </p>
            </blockquote>
            <div className={styles.speakerCertificates}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={DelMarStrategyLogo} alt="Del Mar Strategy" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={NationalLogo} alt="National Logo" />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={SentinalLogo} alt="Sentinal Logo" />
              </a>
            </div>
            <div className={styles.curatorSocialLinks}>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <FacebookLogo />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                <InstagramLogo />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <TwitterLogo />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                <LinkedInLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSpeaker;
