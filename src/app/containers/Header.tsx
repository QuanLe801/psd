import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className="px-[6.25rem] bg-[url('/image/bg-header.png')] bg-no-repeat bg-cover bg-bottom">
      <div className="absolute right-[12.52rem] top-[4.94rem]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-[28.6685rem] h-[43.0625rem]"
        />
      </div>
      <h1 className="text-white font-anton text-[4.6875rem] leading-[6.5625rem] w-full max-w-[50.25rem] pt-[13.94rem] mb-[8.94rem]">
        PSD - DỊCH VỤ PHÂN PHỐI TỔNG HỢP DẦU KHÍ
      </h1>
      <div className="flex justify-between pb-[4.31rem]">
        <div className="w-full max-w-[37.3125rem] relative bottom-0 flex flex-col justify-end">
          <div className="text-white font-anton text-[1.875rem] leading-[2.8125rem] uppercase mb-[0.62rem]">
            bối cảnh dự án
          </div>
          <div className="text-white font-sans text-[1.25rem] leading-[1.5rem]">
            Kể từ khi bắt đầu, PSD đã chuyển động liên tục để trở thành nhà cung
            cấp dịch vụ phân phối chuyên nghiệp hàng đầu trong các lĩnh vực Viễn
            thông và Công nghệ thông tin tại Việt Nam.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-[1.87rem]">
            <div>
              <div className="text-white uppercase font-anton text-[0.875rem] leading-[1.375rem] opacity-65">
                Khách hàng
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem] py-[0.5rem]">
                Công ty dầu khí PSD
              </div>
            </div>
            <div className="ml-[7.19rem]">
              <div className="text-white uppercase font-anton text-[0.875rem] leading-[1.375rem] opacity-65">
                dịch vụ
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem] py-[0.5rem]">
                UI/UX Design
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem]">
                Development
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-white uppercase font-anton text-[0.875rem] leading-[1.375rem] opacity-65">
                thời gian
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem] py-[0.5rem]">
                19/10/2022
              </div>
            </div>
            <div className="ml-[7.19rem]">
              <div className="text-white uppercase font-anton text-[0.875rem] leading-[1.375rem] opacity-65">
                thành viên
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem] py-[0.5rem]">
                Xuân Trinh
              </div>
              <div className="text-white font-medium font-sans text-[1.25rem] leading-[1.65625rem]">
                Trang Nguyễn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
