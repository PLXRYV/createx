import Footer from '@components/common/Footer/Footer';
import Header from '@components/common/Header/Header';
import SubscribeSecondary from '@components/common/SubscribeSecondary/SubscribeSecondary';
import BlogContent from '@pages/BlogDetails/components/BlogContent/BlogContent';
import BlogRelated from '@pages/BlogDetails/components/BlogRelated/BlogRelated';

const BlogDetails = () => {
  return (
    <div>
      <Header />
      <BlogContent />
      <SubscribeSecondary />
      <BlogRelated />
      <Footer />
    </div>
  );
};

export default BlogDetails;
