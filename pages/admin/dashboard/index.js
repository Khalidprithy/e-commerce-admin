import SidebarLayout from '@/components/layouts/SidebarLayout';

const Dashboard = () => {
  return (
    <div>
      <h4 className="">This is Admin Dashboard</h4>
    </div>
  );
};

Dashboard.getLayout = (page) => (
  <SidebarLayout title={'Admin'}>{page}</SidebarLayout>
);

export default Dashboard;
