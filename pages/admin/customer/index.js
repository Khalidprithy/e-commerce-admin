import SidebarLayout from '@/components/layouts/SidebarLayout';

const Customer = () => {

    return <div>
        <h4 className=''>This is Admin Customer</h4>
    </div>;
};

Customer.getLayout = (page) => (
    <SidebarLayout title={'Customer'}>{page}</SidebarLayout>
);

export default Customer;
