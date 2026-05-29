import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.content}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
