/* eslint-disable tailwindcss/no-custom-classname */

import HighlightPicture from '../../assets/images/HighlightPicture.webp';
import LeftFeature from '../../assets/images/LeftFeature.svg';
import RightBottomFeature from '../../assets/images/RightBottomFeature.svg';
import RightTopFeature from '../../assets/images/RightTopFeature.svg';

const Highlight = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="grid gap-5 gap-y-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="relative mb-6 max-w-xl">
            <img
              className="absolute -left-16 -top-16 -z-[1]"
              src={LeftFeature.src}
              alt="background graphics"
            />
            <p
              tabIndex={0}
              className="mb-4 text-left font-Arimo text-sm font-bold uppercase leading-4 tracking-widest text-primary focus:outline-none"
            >
              Core Features
            </p>
            <h2 className="mb-6 max-w-lg font-Inter text-3xl font-bold tracking-tight text-logo sm:text-4xl sm:leading-none">
              Don&apos;t sift through <br className="hidden md:block" />
              piles of{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 -skew-x-12 bg-accent-light" />
                <span className="relative inline-block text-accent">
                  paper reports
                </span>
              </span>
            </h2>
            <p className="font-Arimo text-base text-logo md:text-lg">
              Trying to find the right report? Acidentally destroyed or
              misplaced it? Acess any report you uploaded as a digital copy at
              the touch of a button on our dashboard
            </p>
          </div>
          <a
            href="/"
            className="inline-flex w-40 items-center justify-center rounded-3xl border bg-primary p-3 font-Arimo font-medium text-white"
            aria-label="Get Started"
            title="Get Started"
          >
            Get Started
          </a>
        </div>
        <div className="relative">
          <img
            className="absolute -left-16 -top-16 -z-[1] hidden md:block"
            src={RightTopFeature.src}
            alt="background graphics"
          />
          <img
            className="absolute -z-[1] hidden md:block lg:-right-8 lg:bottom-8 xl:bottom-16 xl:-right-16"
            src={RightBottomFeature.src}
            alt="background graphics"
          />
          <img
            className="h-64 w-full rounded object-cover shadow-lg sm:h-5/6"
            src={HighlightPicture.src}
            alt="a stack of paper reports"
          />
        </div>
      </div>
    </div>
  );
};
export default Highlight;
