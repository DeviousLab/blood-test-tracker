import type { NextPage } from 'next';

import NotFound from '../components/landing-site/NotFound';
import { Meta } from '../layouts/Meta';

const PageNotFound: NextPage = () => {
  return (
    <>
      <Meta
        title="triage | Oops!"
        description="The page you're looking for doesn't exist."
      />
      <NotFound />
    </>
  );
};

export default PageNotFound;
