import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import SubscribeSecondary from '@components/common/SubscribeSecondary/SubscribeSecondary';

import BlogRoad from './BlogRoad';

const BlogList = () => {
  return (
    <div>
      <Header />
      <BlogRoad />
      <SubscribeSecondary />
      <Footer />
    </div>
  );
};

export default BlogList;
