import React from 'react';
import HeroBanner from './HeroBanner';
import Image from 'next/image';

export default function Achievement() {
  return (
    <>
      <div className="mt-[7.06rem] mx-auto">
        <h2
          className="font-anton text-[3.375rem] leading-[4.725rem] uppercase text-blue text-center"
          data-aos="fade-up"
        >
          kết quả dự án
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-black54 font-sans text-2xl leading-[2.55rem] text-center w-full max-w-[53.1875rem] mt-[2rem] mb-[3.44rem] mx-auto"
        >
          Trang chủ PSD là điểm giao tiếp đầu tiên và quan trọng nhất của khách
          hàng khi lên website. Thiết kế của website có cấu trúc đơn giản và dễ
          hiểu để khách hàng dễ dàng điều hướng trang web.
        </h3>
      </div>
      <div className="bg-[url('/achievement.jpg')] bg-cover bg-[center_top_2.1rem] bg-no-repeat w-full ">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full max-w-[72.25rem] p-[1rem] rounded-3xl bg-white bg-opacity-10 mx-auto shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] max-h-[41.6875rem] h-full"
        >
          <HeroBanner />
        </div>
        <div className="flex mt-[7.25rem] justify-center mb-[9.94rem]">
          <div className="mr-[10.38rem] mt-[9.565rem]" data-aos="fade-right">
            <Image
              src={'/achievement-leftColumn.png'}
              alt="achieve-leftColumn"
              width={500}
              height={500}
              className="w-[16.9375rem] h-[34.625rem]"
            />
          </div>
          <div>
            <span
              className="uppercase font-anton text-[1.875rem] leading-[2.625rem] text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Các dịch vụ nổi bật
            </span>
            <Image
              data-aos="fade-left"
              data-aos-delay="300"
              src={'/achievement-rightColumn.png'}
              alt="achieve-leftColumn"
              width={963}
              height={553}
              className="w-[60.1875rem] h-[34.5625rem] rounded-2xl mt-[1.81rem]"
            />
          </div>
        </div>
        <div className="flex mt-[7.75rem] justify-center">
          <div
            className="mr-[7.75rem]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              src={'/achievement-leftColumn-section3.png'}
              alt="achieve-leftColumn"
              width={877}
              height={982}
              className="w-[54.8125rem]"
            />
          </div>
          <div
            className="max-w-[25.9375rem]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image
              src={'/achievement-rightColumn-section3.png'}
              alt="achieve-leftColumn"
              width={271}
              height={554}
              className="w-[16.9375rem] h-[34.625rem] rounded-2xl "
            />
            <div
              className="text-white font-anton text-[1.875rem] mt-[4.19rem] mb-[1.5rem]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              CƠ CHẾ KINH DOANH LINH HOẠT KẾT HỢP TINH THẦN THƯỢNG TÔN PHÁP LUẬT
            </div>
            <div
              className="text-white font-sans text-[1rem] "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sự năng động, nhanh nhạy với thay đổi thị trường song hành cùng
              tinh thần thượng tôn pháp luật đã giúp psd có được những thành
              công bền vững.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
