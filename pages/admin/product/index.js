import ProductCard from '@/components/cards/ProductCard';
import SidebarLayout from '@/components/layouts/SidebarLayout';
import useProduct from '@/hooks/useProduct';

const Product = () => {
  const [products] = useProduct();


  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products?.slice(0, 12).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

Product.getLayout = (page) => (
  <SidebarLayout title={'Product'}>{page}</SidebarLayout>
);

export default Product;
