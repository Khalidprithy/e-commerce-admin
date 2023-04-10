import SidebarLayout from '@/components/layouts/SidebarLayout';
import { useStats } from '@/hooks/useStats';

const Dashboard = () => {

  const [statsData] = useStats();
  console.log(statsData);

  return (
    <div>
      <h4 className="">This is Admin Dashboard</h4>
    </div>
  );
};

Dashboard.getLayout = (page) => (
  <SidebarLayout title={'Admin Dashboard'}>{page}</SidebarLayout>
);

export default Dashboard;
