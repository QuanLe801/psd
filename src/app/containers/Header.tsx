import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className="px-[0.62rem] md:px-[6.25rem] bg-[url('/image/bg-header.png')] bg-no-repeat bg-cover bg-[-20rem_center] md:bg-bottom">
      <div className="absolute right-[1.24rem] top-[5.88rem] md:right-[12.52rem] md:top-[4.94rem]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="md:w-[28.6685rem] md:h-[43.0625rem] w-[12.48281rem] h-[18.75rem]"
        />
      </div>
      <h1
        data-aos="fade-up"
        className="text-white font-anton text-[2rem] md:text-[4.6875rem] leading-[3rem] md:leading-[6.5625rem] w-full md:max-w-[50.25rem] pt-[13.94rem] md:mb-[8.94rem] mb-[2.5rem]"
      >
        PSD - DỊCH VỤ PHÂN PHỐI TỔNG HỢP DẦU KHÍ
      </h1>
      <div className="flex flex-col-reverse md:flex-row md:flex md:justify-between pb-[4.31rem]">
        <div
          data-aos="fade-up"
          className="mt-[6.5rem] md:mt-0 w-full max-w-[37.3125rem] relative bottom-0 flex flex-col justify-end"
        >
          <div className="text-white font-anton text-[1.5rem] leading-[2.25rem] md:text-[1.875rem] md:leading-[2.8125rem] uppercase mb-[0.62rem]">
            bối cảnh dự án
          </div>
          <div
            data-aos="fade-up"
            className="text-white font-sans text-[0.875rem] leading-[1.3125rem] md:text-[1.25rem] md:leading-[1.5rem]"
          >
            Kể từ khi bắt đầu, PSD đã chuyển động liên tục để trở thành nhà cung
            cấp dịch vụ phân phối chuyên nghiệp hàng đầu trong các lĩnh vực Viễn
            thông và Công nghệ thông tin tại Việt Nam.
          </div>
        </div>
        <div className="flex justify-between md:block">
          <div className="md:grid md:grid-cols-2 md:gap-4 md:mb-[1.87rem]">
            <div>
              <div
                style={{ opacity: '0.65 !important' }}
                data-aos="fade-up"
                className="text-white uppercase font-anton text-[0.75rem] leading-[1.3125rem] md:text-[0.875rem] md:leading-[1.375rem] "
              >
                Khách hàng
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem] md:py-[0.5rem]"
              >
                Công ty dầu khí PSD
              </div>
            </div>
            <div className="md:ml-[7.19rem]">
              <div
                style={{ opacity: '0.65 !important' }}
                data-aos="fade-up"
                className="text-white uppercase font-anton text-[0.75rem] leading-[1.3125rem] md:text-[0.875rem] md:leading-[1.375rem]"
              >
                dịch vụ
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem] md:py-[0.5rem]"
              >
                UI/UX Design
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem]"
              >
                Development
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div
                style={{ opacity: '0.65 !important' }}
                data-aos="fade-up"
                className="text-white uppercase font-anton text-[0.75rem] leading-[1.3125rem] md:text-[0.875rem] md:leading-[1.375rem]"
              >
                thời gian
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem] md:py-[0.5rem]"
              >
                19/10/2022
              </div>
            </div>
            <div className="md:ml-[7.19rem]">
              <div
                style={{ opacity: '0.65 !important' }}
                data-aos="fade-up"
                className="text-white uppercase font-anton text-[0.75rem] leading-[1.3125rem] md:text-[0.875rem] md:leading-[1.375rem]"
              >
                thành viên
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem] md:py-[0.5rem]"
              >
                Xuân Trinh
              </div>
              <div
                data-aos="fade-up"
                className="text-white font-medium font-sans text-[1rem] leading-[1.65625rem] md:text-[1.25rem]"
              >
                Trang Nguyễn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
