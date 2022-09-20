/* eslint-disable tailwindcss/no-custom-classname */

import Link from 'next/link';

const Banner = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="mx-auto w-2/3 rounded-md bg-primary bg-[url('../assets/images/BannerPattern.svg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="font-Inter text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Make tracking your health easier.</span>
          <span className="block">Start using triage today.</span>
        </h2>
        <Link href="/account/register">
          <a className="mt-8 inline-flex w-full items-center justify-center rounded-3xl border bg-white px-5 py-3 font-Arimo text-lg text-accent transition duration-300 ease-in-out hover:border-white hover:bg-accent	hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto">
            Get Started
          </a>
        </Link>
      </div>
    </section>
  );
};
export default Banner;
