import SidebarLayout from '@/components/layouts/SidebarLayout';

const AddProduct = () => {
  return (
    <div>
      <h4>Add New Product</h4>
    </div>
  );
};

AddProduct.getLayout = (page) => (
  <SidebarLayout title={'Product Details'}>{page}</SidebarLayout>
);

export default AddProduct;
