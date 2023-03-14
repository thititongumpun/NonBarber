const CTA = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white md:h-screen mx-auto mt-5 p-2">
        <div className="mt-5 flex flex-col space-y-6 p-4 text-center">
          <h1 className="text-lg font-bold uppercase tracking-widest text-[#af8c45]">
            Welcome to NonBarber
          </h1>
          <h1 className="max-w-sm text-3xl font-bold uppercase text-black md:max-w-6xl md:text-8xl">
            A FULL SERVICE BARBERSHOP
          </h1>
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
        {/* <Modal title="book now">Yo</Modal> */}
      </main>
    </>
  );
};

export default CTA;
