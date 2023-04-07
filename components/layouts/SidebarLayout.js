import Head from 'next/head';
import PropTypes from 'prop-types';
import AdminHeader from '../common/AdminHeader';
import Sidebar from '../common/Sidebar';

const SidebarLayout = ({ children, title }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="">
        <div className="w-16 md:w-40 bg-green-200 transition-all ease-in-out duration-500">
          <Sidebar />
        </div>
        <main className="ml-16 md:ml-40 transition-all ease-in-out duration-500">
          <AdminHeader />
          {children}
        </main>
      </div>
    </div>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node,
};

export default SidebarLayout;

SidebarLayout.defaultProps = {
  title: 'E-Commerce',
};
