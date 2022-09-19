/* eslint-disable tailwindcss/no-custom-classname */
const Process = () => {
  return (
    <section className="bg-primary bg-[url('../assets/images/ProcessPattern.png')] bg-cover bg-no-repeat px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:w-screen lg:px-8 lg:py-20">
      <div role="contentinfo" className="flex flex-col items-center px-4">
        <p
          tabIndex={0}
          className="text-center font-Arimo text-sm font-bold uppercase leading-4 tracking-widest text-white focus:outline-none"
        >
          How does it work?
        </p>
        <h2
          tabIndex={0}
          className="pt-4 text-center font-Inter text-4xl font-bold leading-10 text-white focus:outline-none md:w-9/12 lg:w-5/12 lg:text-4xl"
        >
          Process
        </h2>
      </div>
      <div className="mt-20 grid gap-8 gap-y-0 font-Arimo lg:grid-cols-4">
        <div className="relative text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-3xl font-bold text-logo shadow-xl sm:h-20 sm:w-20">
            1
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="w-52 text-center">
              <h3 className="mb-3 max-w-md text-xl sm:mx-auto">
                Add your report
              </h3>
            </div>
            <div className="mb-4 inline-flex items-center">
              <p className="mt-8 text-sm">
                Create an account and upload either one or all of your blood
                test reports to our platform
              </p>
            </div>
          </div>
          <div className="top-0 right-0 flex h-24 items-center justify-center lg:absolute lg:-mr-8">
            <svg
              className="w-8 rotate-90 text-white lg:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-3xl font-bold text-logo shadow-xl sm:h-20 sm:w-20">
            2
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="w-52 text-center">
              <h3 className="mb-3 max-w-md text-xl sm:mx-auto">
                Analyse test data
              </h3>
            </div>
            <div className="mb-4 inline-flex items-center">
              <p className="mt-8 text-sm">
                Our custom tuned machine learning model will parse the report
                and obtain all the relevant data{' '}
              </p>
            </div>
          </div>
          <div className="top-0 right-0 flex h-24 items-center justify-center lg:absolute lg:-mr-8">
            <svg
              className="w-8 rotate-90 text-white lg:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-3xl font-bold text-logo shadow-xl sm:h-20 sm:w-20">
            3
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="w-52 text-center">
              <h3 className="mb-3 max-w-md text-xl sm:mx-auto">
                Display the results
              </h3>
            </div>
            <div className="mb-4 inline-flex items-center">
              <p className="mt-8 text-sm">
                The results data will be presented on accessible charts for you
                to peruse
              </p>
            </div>
          </div>
          <div className="top-0 right-0 flex h-24 items-center justify-center lg:absolute lg:-mr-8">
            <svg
              className="w-8 rotate-90 text-white lg:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-3xl font-bold text-logo shadow-xl sm:h-20 sm:w-20">
            4
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <div className="w-52 text-center">
              <h3 className="mb-3 max-w-md text-xl sm:mx-auto">
                Maintain a collection
              </h3>
            </div>
            <div className="mb-4 inline-flex items-center">
              <p className="mt-8 text-sm">
                All the data from the reports uploaded will be accessible
                through the your dashboard at any given moment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
