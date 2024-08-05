import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Produce() {
  const items = [
    '/produce-item1.png',
    '/produce-item2.png',
    '/produce-item3.png',
  ];
  return (
    <div className="md:pb-[11.25rem] pb-[8.25rem] flex md:flex-row flex-col bg-bottom bg-[url('/produce.png')] bg-no-repeat bg-cover md:py-[11.88rem] overflow-hidden">
      <div className="mt-0 md:mt-[4rem] md:pl-[6.25rem] w-full max-w-[46.0575rem] md:pr-[5.62rem]">
        <div
          className="px-[0.62rem] mt-[5.62rem] md:mt-0 font-anton text-[1.5rem] leading-[2.1rem] md:text-[3.375rem] md:leading-[4.725rem] uppercase text-white mb-[1rem] md:mb-8"
          data-aos="fade-up"
        >
          ngành hàng kinh doanh
        </div>
        <div
          className="px-[0.62rem] font-sans text-[0.875rem] leading-[1.3125rem] md:text-2xl md:leading-[2.55rem] lowercase text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="uppercase">PSD</span> SỞ HỮU HỆ THỐNG PHÂN PHỐI RỘNG
          KHẮP TRÊN TOÀN QUỐC, KHO BÃI ĐƯỢC TRANG BỊ HIỆN ĐẠI, ĐẦY ĐỦ CHỨC NĂNG
          TẠI MỖI CHI NHÁNH. MẠNG LƯỚI NHÂN VIÊN TẬN TÂM, GIÀU KINH NGHIỆM LUÔN
          BÁM SÁT ĐỊA BÀN ĐỂ CHĂM SÓC TRỰC TIẾP CHO MỌI KHÁCH HÀNG.
        </div>
      </div>
      <div
        className={`pl-[0.62rem] md:pl-0 mt-[2.69rem] md:mt-0 md:w-[calc(100vw-46.0575rem)]`}
        data-aos="fade-left"
      >
        <Swiper spaceBetween={50} slidesPerView={1.3} loop autoplay>
          {items.map((item: any, key: number) => (
            <SwiperSlide key={key}>
              <div
                className="w-full max-w-[72.25rem] p-[0.31rem] md:p-[1rem] rounded-[0.625rem] md:rounded-3xl bg-opacity-50 md:bg-opacity-100 bg-white"
                key={key}
              >
                <Image src={item} alt="banner1" width={1124} height={635} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
