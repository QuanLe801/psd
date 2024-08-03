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
    <div className="flex bg-bottom bg-[url('/produce.png')] bg-no-repeat bg-cover py-[11.88rem] overflow-hidden">
      <div className=" pl-[6.25rem] w-full max-w-[46.0575rem] pr-[5.62rem]">
        <div
          className="font-anton text-[3.375rem] leading-[4.725rem] uppercase text-white mb-8"
          data-aos="fade-up"
        >
          ngành hàng kinh doanh
        </div>
        <div
          className="font-sans text-2xl leading-[2.55rem] lowercase text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="uppercase">PSD</span> SỞ HỮU HỆ THỐNG PHÂN PHỐI RỘNG
          KHẮP TRÊN TOÀN QUỐC, KHO BÃI ĐƯỢC TRANG BỊ HIỆN ĐẠI, ĐẦY ĐỦ CHỨC NĂNG
          TẠI MỖI CHI NHÁNH. MẠNG LƯỚI NHÂN VIÊN TẬN TÂM, GIÀU KINH NGHIỆM LUÔN
          BÁM SÁT ĐỊA BÀN ĐỂ CHĂM SÓC TRỰC TIẾP CHO MỌI KHÁCH HÀNG.
        </div>
      </div>
      <div className={`w-[calc(100vw-46.0575rem)]`} data-aos="fade-left">
        <Swiper spaceBetween={50} slidesPerView={1.3} loop autoplay>
          {items.map((item: any, key: number) => (
            <SwiperSlide key={key}>
              <div
                className="w-full max-w-[72.25rem] p-[1rem] rounded-3xl bg-white"
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
