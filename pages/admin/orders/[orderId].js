import SidebarLayout from '@/components/layouts/SidebarLayout';
import { useRouter } from 'next/router';

const OrderDetail = () => {
  const router = useRouter();

  const orderId = router.query.orderId;

  return (
    <div>
      <h4>Order Details of Order {orderId}</h4>
    </div>
  );
};

OrderDetail.getLayout = (page) => (
  <SidebarLayout title={'Order Details'}>{page}</SidebarLayout>
);

export default OrderDetail;
