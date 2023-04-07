import Head from 'next/head';
import PropTypes from 'prop-types';

const AuthLayout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="">{children}</main>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
