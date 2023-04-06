import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from "../common/Footer";
import TopBar from "../common/TopBar";

const PrimaryLayout = ({ children, title }) => {
    return (
        <div>
            <TopBar />
            <Head>
                <title>{title}</title>
            </Head>
            <main className="m-4 p-4 border-[16px] border-green-300">{children}</main>
            <Footer />
        </div>
    );
};
PrimaryLayout.propTypes = {
    children: PropTypes.node
};

export default PrimaryLayout;
