import ProductCard from '@/components/cards/ProductCard';
import useProduct from '@/hooks/useProduct';
import Head from 'next/head';
import Link from 'next/link';
import PrimaryLayout from '../components/layouts/PrimaryLayout';

function Home() {
  const [products] = useProduct();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold my-8">Welcome to our E-commerce Website</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View All Products
          </Link>
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => <PrimaryLayout title={'Home'}>{page}</PrimaryLayout>;

export default Home;
