import React, { useRef, useState } from 'react';
import styles from './HomeSwipper.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSwipper() {

    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <img src="/assets/images/1.jpg" alt="1" />
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src="/assets/images/2.jpg" alt="2" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
