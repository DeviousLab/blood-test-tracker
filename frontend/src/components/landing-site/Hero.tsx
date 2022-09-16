import Dashboard from '../../assets/images/dashboard.svg';
import LeftOverlay from '../../assets/images/LeftOverlay.svg';
import RightOverlay from '../../assets/images/RightOverlay.svg';

const Hero = () => {
  return (
    <div className="overflow-y-hidden bg-gray-100 py-12">
      <div className="w-full px-6">
        <div className="container relative mx-auto mt-8 flex flex-col items-center rounded-lg bg-primary pt-12 pb-24 sm:pt-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <img
            className="absolute right-0 top-0 mr-2 mt-2 lg:mr-12 lg:mt-12"
            src={LeftOverlay.src}
            alt="bg"
          />
          <img
            className="absolute bottom-0 left-0 ml-2 mb-2 lg:ml-12 lg:mb-12"
            src={RightOverlay.src}
            alt="bg"
          />
          <div className="mb-5 w-11/12 sm:mb-10 sm:w-2/3">
            <h1 className="text-center font-Inter text-2xl leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Track your lab results
            </h1>
            <p className="mt-2 text-center font-Arimo text-white">
              If you&apos;re looking for a way to keep track of your blood test
              results, look no further than{' '}
              <span className="font-extrabold">triage</span>. With our
              easy-to-use interface, you can easily track your results over time
              and spot any trends that may emerge.
            </p>
          </div>
          <div className="mb-10 flex items-center justify-center sm:mb-20">
            <button className="rounded-3xl border bg-white px-4 py-1 text-sm text-accent transition duration-300 ease-in-out hover:border-white hover:bg-accent	hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:px-8 sm:py-3 lg:text-xl">
              Learn more
            </button>
          </div>
        </div>
        <div className="container mx-auto -mt-20 flex justify-center sm:-mt-40 md:-mt-56">
          <div className="relative w-11/12 sm:w-2/3">
            <img
              className="rounded drop-shadow-xl transition duration-300 ease-in hover:drop-shadow-2xl"
              src={Dashboard.src}
              alt="Sample dashboard page"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
