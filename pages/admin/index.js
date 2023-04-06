import SidebarLayout from "@/components/layouts/SidebarLayout";

const AdminPage = () => {
    return (
        <div>
            hello
        </div>
    );
};

AdminPage.getLayout = (page) => <SidebarLayout title={'Admin'}>{page}</SidebarLayout>;

export default AdminPage;