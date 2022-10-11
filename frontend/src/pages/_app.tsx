import '../styles/global.css';

import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

Amplify.configure({
  ...JSON.parse(process.env.NEXT_PUBLIC_AWS_CONFIG as string),
  ssr: true,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Toaster position="bottom-right" reverseOrder={false} />
  </>
);

export default MyApp;
