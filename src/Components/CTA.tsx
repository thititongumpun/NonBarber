const CTA = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white md:h-screen">
        <div className="flex flex-col space-y-6 text-center p-4 mt-5">
          <h1 className="text-lg font-bold uppercase tracking-widest text-[#af8c45]">
            Welcome to NonBarber
          </h1>
          <h1 className="max-w-sm text-3xl font-bold uppercase text-black md:max-w-6xl md:text-8xl">
            A FULL SERVICE BARBERSHOP
          </h1>
          {/* <p className="text-center">
          The Shave offers every facet of trim, cut and shave services. We are a
          highly skilled team of hair crafts-people with a penchant for
          perfectly groomed gents and a service-first mission to leave our
          clients looking their best.
        </p> */}
        </div>
        <section className="mt-6 grid grid-cols-1 gap-6 text-center shadow-2xl md:grid-cols-3">
          <div className="flex flex-col space-y-3">
            <img
              src="https://shavehtml.every-tuesday.com/assets/images/services/feature-module-1/shave-service-shaving.jpg"
              alt=""
            />
            <p className="text-lg font-bold uppercase tracking-widest">
              Full Shave
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <img
              src="https://shavehtml.every-tuesday.com/assets/images/services/feature-module-1/shave-service-beard.jpg"
              alt=""
            />
            <p className="text-lg font-bold uppercase tracking-widest">
              Beard / Stache
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <img
              src="https://shavehtml.every-tuesday.com/assets/images/services/feature-module-1/shave-service-haircut.jpg"
              alt=""
            />
            <p className="text-lg font-bold uppercase tracking-widest">
              Hair Cuts
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default CTA;
