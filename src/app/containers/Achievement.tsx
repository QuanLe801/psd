import React from 'react';
import HeroBanner from './HeroBanner';
import Image from 'next/image';

export default function Achievement() {
  return (
    <>
      <div className="md:mt-[7.06rem] mx-[0.75rem] md:mx-auto overflow-hidden">
        <h2
          className="font-anton text-[1.5rem] leading-[2.1rem] md:text-[3.375rem] md:leading-[4.725rem] uppercase text-blue text-center"
          data-aos="fade-up"
        >
          kết quả dự án
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-black54 font-sans md:text-2xl md:leading-[2.55rem] text-[0.875rem] leading-[1.3125rem] text-center w-full px-[1.25rem] md:px-0 md:max-w-[53.1875rem] mt-[1rem] md:mt-[2rem] mb-[1.5rem] md:mb-[3.44rem] mx-auto"
        >
          Trang chủ PSD là điểm giao tiếp đầu tiên và quan trọng nhất của khách
          hàng khi lên website. Thiết kế của website có cấu trúc đơn giản và dễ
          hiểu để khách hàng dễ dàng điều hướng trang web.
        </h3>
      </div>
      <div className="bg-[url('/achievement.jpg')] bg-cover md:bg-[center_top_2.1rem] bg-no-repeat w-full ">
        <div
          data-aos-delay="300"
          data-aos="fade-up"
          className="mb-[2.75rem] md:mb-0 mx-[0.62rem] md:w-full md:max-w-[72.25rem] p-[0.5rem] md:p-[1rem] rounded-2xl md:rounded-3xl bg-white bg-opacity-10 md:mx-auto shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] max-h-[13.125rem] md:max-h-[41.6875rem] h-full"
        >
          <HeroBanner />
        </div>

        <div className="mx-[0.62rem] md:flex md:mt-[7.25rem] justify-center md:mb-[9.94rem]">
          <div
            className="md:mr-[10.38rem] md:mt-[9.565rem]"
            data-aos="fade-right"
          >
            <Image
              src={'/achievement-leftColumn.png'}
              alt="achieve-leftColumn"
              width={500}
              height={500}
              className="w-[16.25rem] h-[32.9375rem] md:w-[16.9375rem] md:h-[34.625rem]"
            />
          </div>
          <div className="overflow-hidden">
            <div className="md:hidden mt-8">
              <span className="text-[1rem] font-anton leading-6 text-white uppercase">
                khách hàng của chúng tôi
              </span>
              <div
                data-aos-delay="300"
                data-aos="fade-up"
                className="mt-[0.62rem] mb-[2.75rem] md:mb-0 md:w-full md:max-w-[72.25rem] p-[0.5rem] md:p-[1rem] rounded-2xl md:rounded-3xl bg-white bg-opacity-10 md:mx-auto shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] max-h-[13.125rem] md:max-h-[41.6875rem] h-full"
              >
                <HeroBanner />
              </div>
            </div>
            <span
              className="hidden md:block uppercase font-anton text-[1.875rem] leading-[2.625rem] text-white"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
            >
              Các dịch vụ nổi bật
            </span>

            <Image
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
              src={'/achievement-rightColumn.png'}
              alt="achieve-leftColumn"
              width={963}
              height={553}
              className="hidden md:block w-[60.1875rem] h-[34.5625rem] rounded-2xl mt-[1.81rem]"
            />
          </div>
        </div>
        <div className="px-[0.62rem] md:px-0 flex flex-col-reverse md:flex-row md:mt-[7.75rem] justify-center overflow-hidden">
          <div
            className=" md:mr-[7.75rem]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src={'/achievement-leftColumn-section3.png'}
              alt="achieve-leftColumn"
              width={877}
              height={982}
              className="md:w-[54.8125rem]"
            />
          </div>
          <div
            className="md:max-w-[25.9375rem]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src={'/achievement-rightColumn-section3.png'}
              alt="achieve-leftColumn"
              width={271}
              height={554}
              className="w-[16.9375rem] h-[34.625rem] rounded-2xl md:mx-0 mx-auto"
            />
            <div
              className="text-left text-white font-anton text-[1rem] md:text-[1.875rem] mt-[2.5rem] mb-[1rem] md:mt-[4.19rem] md:mb-[1.5rem] "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-center"
            >
              CƠ CHẾ KINH DOANH LINH HOẠT <br /> KẾT HỢP TINH THẦN THƯỢNG TÔN
              PHÁP LUẬT
            </div>
            <div
              className="text-white font-sans md:text-[1rem] text-[0.875rem] mb-[2rem] md:mb-0"
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
