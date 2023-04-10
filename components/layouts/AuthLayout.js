import Head from 'next/head';
import PropTypes from 'prop-types';

const AuthLayout = ({ children, title = 'My App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="">{children}</main>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AuthLayout;
