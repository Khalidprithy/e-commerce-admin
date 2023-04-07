import ProductCard from '@/components/cards/ProductCard';
import SidebarLayout from '@/components/layouts/SidebarLayout';
import useProduct from '@/hooks/useProduct';

const Product = () => {


    const [products] = useProduct();

    console.log(products)

    return <div className='p-4'>
        <h4 className='text-xl text-center font-medium p-2'>This is Admin Product</h4>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                products?.slice(0, 12).map(product => <ProductCard
                    key={product._id}
                    product={product}
                >

                </ProductCard>)
            }
        </div>
    </div>;
};

Product.getLayout = (page) => (
    <SidebarLayout title={'Product'}>{page}</SidebarLayout>
);

export default Product;
