import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';
import TopBar from '../common/TopBar';

const PrimaryLayout = ({ children, title = 'E-Commerce' }) => {
  return (
    <>
      <TopBar />
      <Head>
        <title>{title}</title>
      </Head>
      <main className="m-4 p-4">{children}</main>
      <Footer />
    </>
  );
};

PrimaryLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default PrimaryLayout;
