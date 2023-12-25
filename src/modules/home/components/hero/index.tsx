"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Swiper className="w-full h-full" slidesPerView={1}>
        <SwiperSlide>
          <Image
            className="object-cover"
            src="/images/back.jpg"
            alt=""
            fill={true}
          />
          <a href="https://www.instagram.com/inipassion/" target="_blank">
            <button className="text-sm md:text-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 p-3 font-bold text-white rounded-full">
              Suivez-nous sur Instagram →
            </button>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="object-cover"
            src="/images/back2.jpg"
            fill={true}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
