"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Swiper className="w-full h-full" slidesPerView={1}>
        <SwiperSlide>
          <img
            className="w-full h-full object-contain"
            src="/images/back.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full h-full " src="/images/back2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
