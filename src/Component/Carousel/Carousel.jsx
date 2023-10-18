import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination} from 'swiper/modules';

const Carousel = () => {
    return (
        <div className='container mx-auto'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='w-full max-h-[86vh]' src="../assets/slide-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full max-h-[86vh]' src="../assets/slide-2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full max-h-[86vh]' src="../assets/slide-3.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Carousel;