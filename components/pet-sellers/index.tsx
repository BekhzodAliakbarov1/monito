import StyledButton from 'components/button';
import ChevronRightIcon from 'components/icons/chevron-right.icon';
import React from 'react';
import { PetSellerHeader, PetSellerWrapper, SwiperItem, SwiperWrapper } from './pet-sellers.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import image1 from 'public/images/seller1.png';
import image2 from 'public/images/seller2.png';
import image3 from 'public/images/seller3.png';
import image4 from 'public/images/seller4.png';
import image5 from 'public/images/seller5.png';
import image6 from 'public/images/seller6.png';
import image7 from 'public/images/seller7.png';

const images = [image1, image2, image3, image4, image5, image6, image7];

const PetSellers = () => {
  return (
    <PetSellerWrapper>
      <PetSellerHeader>
        <h2>
          Proud to be part of <span>Pet Sellers</span>
        </h2>
        <StyledButton buttonType="transparent" rightIcon={<ChevronRightIcon />}>
          View all our sellers
        </StyledButton>
      </PetSellerHeader>
      <SwiperWrapper>
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <SwiperItem>
                <img src={image.src} alt="seller pictures" width="60%" />
              </SwiperItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </PetSellerWrapper>
  );
};

export default PetSellers;
