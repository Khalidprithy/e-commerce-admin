import SidebarLayout from "@/components/layouts/SidebarLayout";

const AddCustomer = () => {
    return (
        <div>
            <h4>Add New Customer</h4>
        </div>
    );
};

AddCustomer.getLayout = (page) => (
    <SidebarLayout title={'Customer Form'}>{page}</SidebarLayout>
);

export default AddCustomer;