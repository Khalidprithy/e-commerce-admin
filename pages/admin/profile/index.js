import SidebarLayout from '@/components/layouts/SidebarLayout';

const AdminProfile = () => {
  return (
    <div>
      <h4>This is the admin profile page</h4>
    </div>
  );
};

AdminProfile.getLayout = (page) => (
  <SidebarLayout title={'Admin Profile'}>{page}</SidebarLayout>
);

export default AdminProfile;
