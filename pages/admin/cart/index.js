import SidebarLayout from '@/components/layouts/SidebarLayout';

const Cart = () => {
  return (
    <div>
      <h4 className="">This is Admin Cart</h4>
    </div>
  );
};

Cart.getLayout = (page) => <SidebarLayout title={'Cart'}>{page}</SidebarLayout>;

export default Cart;
