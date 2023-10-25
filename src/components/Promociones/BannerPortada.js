import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const BannerPortada = () => {
  return (
    <>
      <Swiper
        loop
        modules={[Navigation, Pagination]}
        pagination={{ el: ".swiper-paginations", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="relative"
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center"
            src="https://assets1.farmaciasanpablo.com.mx/banners/slider/04sliderDestacados-15-21Oct-gridHome-d-v1@2x.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.ctfassets.net/l9x8e72nkkav/5iaCv5Uj6RiEhB85vdOoZh/4c56e290cd1b74808d9091d74ca31935/ENFAGROW-nutricioninfantil-inkafarma-slider-web.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.ctfassets.net/l9x8e72nkkav/1T8NuSpeFKuTSp2KOkhUBZ/c986e7a41cc3985c21e6093e970ac8ef/Amaras-cuidadopersonal-inkafarma-slider-web.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.ctfassets.net/l9x8e72nkkav/1T8NuSpeFKuTSp2KOkhUBZ/c986e7a41cc3985c21e6093e970ac8ef/Amaras-cuidadopersonal-inkafarma-slider-web.jpg"
            alt="banner"
          />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IoArrowBack className="text-[14px] text-[#222224]" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoArrowForward className="text-[14px] text-[#222224]" />
          </div>
        </div>
        <div className="swiper-paginations bottom-0 z-50"></div>
      </Swiper>
    </>
  );
};

export default BannerPortada;
