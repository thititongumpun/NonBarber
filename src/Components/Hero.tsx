import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectFade,
} from "swiper";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
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
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-3xl uppercase text-white sm:text-4xl md:text-6xl">
              {t("slide_1")}
            </h1>
            <p className="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 animate-pulse p-6 text-xs text-white md:mt-4 md:text-sm">
              {t("slide_1_subtitle")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen bg-hero2 bg-cover bg-center bg-no-repeat md:bg-cover">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-3xl uppercase text-white md:text-6xl">
              {t("slide_2")}
            </h1>
            <p className="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 animate-pulse p-6 text-xs text-white md:mt-4 md:text-sm">
              {t("slide_2_subtitle")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Hero;
