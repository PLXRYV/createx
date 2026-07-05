import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const scrollToTopSmooth = (): void => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

export const useScrollToTop = (): void => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    scrollToTopSmooth();
  }, [pathname, search]);
};
