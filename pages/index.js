import Head from 'next/head';
import PrimaryLayout from '../components/layouts/PrimaryLayout';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className="text-5xl">This is the home page</h1>
      <p className="mt-4 text-lg">Feel free to go somewhere else</p>
    </>
  );
}

Home.getLayout = (page) => <PrimaryLayout title={'Home'}>{page}</PrimaryLayout>;

export default Home;
