const Hero = () => {
  return (
    <main className="relative">
      <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat md:bg-cover"></div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-3xl uppercase text-white md:text-6xl">
        Master of the blade
      </h1>
      <p className="absolute top-1/2 left-1/2 mt-6 -translate-x-1/2 animate-pulse text-xs text-white md:text-sm">
        Some description text. Some dummy text here. Welcome to KindaCode.com
      </p>
    </main>
  );
};

export default Hero;
