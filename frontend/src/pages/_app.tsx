import '../styles/global.css';

import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

// eslint-disable-next-line import/extensions
// @ts-ignore
import awsconfig from '../aws-exports';

Amplify.configure({ ...awsconfig, ssr: true });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Toaster position="bottom-right" reverseOrder={false} />
  </>
);

export default MyApp;
