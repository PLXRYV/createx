import Header from '@components/common/Header/Header';

import Hero from './Hero';
import styles from './HeroWrapper.module.scss';

const HeroWrapper = () => {
  return (
    <div className={styles.heroWrapperBg}>
      <Header />
      <Hero />
    </div>
  );
};

export default HeroWrapper;
