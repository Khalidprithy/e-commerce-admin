import Head from 'next/head';
import PropTypes from 'prop-types';
import AdminHeader from '../common/AdminHeader';
import Sidebar from "../common/Sidebar";


const SidebarLayout = ({ children, title }) => {
    return (
        <div className="">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="flex">
                <div className="w-2/12 bg-green-200">
                    <Sidebar />
                </div>
                <main className="w-10/12 bg-red-200">
                    <AdminHeader />
                    {children}
                </main>
            </div>
        </div>
    );
};

SidebarLayout.propTypes = {
    children: PropTypes.node
};

export default SidebarLayout;
