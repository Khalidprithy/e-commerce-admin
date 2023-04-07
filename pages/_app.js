import { MyContextProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <MyContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </MyContextProvider>
      <Toaster />
    </div>
  );
}

export default MyApp;
