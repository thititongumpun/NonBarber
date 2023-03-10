import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y, EffectFade } from "swiper";

const Hero = () => {
  return (
    <main className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        effect="fade"
      >
        <SwiperSlide>
          <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat md:bg-cover">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-3xl uppercase text-white md:text-6xl">
              Master of the blade
              asdsd
            </h1>
            <p className="absolute top-1/2 left-1/2 mt-6 -translate-x-1/2 animate-pulse text-xs text-white md:text-sm">
              Some description text. Some dummy text here. Welcome to
              KindaCode.com
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-hero2 bg-cover bg-center bg-no-repeat md:bg-cover">
            2
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Hero;
