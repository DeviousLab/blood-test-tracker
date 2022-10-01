import type { NextPage } from 'next';

import Footer from '../../components/account/Footer';
import Header from '../../components/account/Header';
import ResetPasswordForm from '../../components/account/ResetPasswordForm';
import { Meta } from '../../layouts/Meta';

const Register: NextPage = () => {
  return (
    <>
      <Meta title="triage | Reset Password" description="Reset your password" />
      <Header />
      <ResetPasswordForm />
      <Footer />
    </>
  );
};
export default Register;
