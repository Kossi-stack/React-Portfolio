import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Paka</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              repellat in praesentium minima vero nisi quibusdam hic.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>Paka</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              repellat in praesentium minima vero nisi quibusdam hic.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>Paka</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              repellat in praesentium minima vero nisi quibusdam hic.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5>Paka</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              repellat in praesentium minima vero nisi quibusdam hic.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials