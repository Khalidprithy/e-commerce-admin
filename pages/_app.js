import { MyContextProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MyContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </MyContextProvider>
      </QueryClientProvider>
      <Toaster />
    </div>
  );
}

export default MyApp;
