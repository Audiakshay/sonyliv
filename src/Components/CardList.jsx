import React from "react";
import "swiper/css";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Components/ComponentStyles/swiperCss.css";

function CardList({ data }) {
  const url = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <Swiper slidesPerView={8} className="SwiperSlide">
        {data?.map((x) => (
          <SwiperSlide>
            <img
              className="imgSlide"
              src={x.poster_path.includes('http') ? x.poster_path : url + x.poster_path}
              alt="listImages"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CardList;
