import SidebarLayout from '@/components/layouts/SidebarLayout';

const Orders = () => {

    return <div>
        <h4 className=''>This is Admin Orders</h4>
    </div>;
};

Orders.getLayout = (page) => (
    <SidebarLayout title={'Orders'}>{page}</SidebarLayout>
);

export default Orders;
