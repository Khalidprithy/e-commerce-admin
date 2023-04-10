import Head from 'next/head';
import PropTypes from 'prop-types';
import AdminHeader from '../common/AdminHeader';
import Sidebar from '../common/Sidebar';

const SidebarLayout = ({ children, title = 'E-Commerce' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex">
        <div className="w-16 md:w-40 bg-green-200 transition-all ease-in-out duration-500">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <AdminHeader />
          <main className="pt-20 p-4 transition-all ease-in-out duration-500">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SidebarLayout;
