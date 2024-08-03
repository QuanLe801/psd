import Image from 'next/image';
import React from 'react';

export default function Summary() {
  return (
    <div className="flex bg-[url('/summary-bg.png')] bg-no-repeat bg-cover bg-right-center mb-[20.81rem]">
      <div>
        <Image
          data-aos="fade-right"
          src={'/summary.png'}
          alt="summary"
          width={1000}
          height={1000}
          className="max-w-[50.9375rem] object-cover"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-auto flex justify-center flex-col"
      >
        <Image
          src={'/quote2.svg'}
          alt="quote2"
          width={1000}
          height={1000}
          className="w-[5.16238rem] h-[4rem] ml-[2.8rem]"
        />
        <div className="max-w-[33.75rem] mt-[1.69rem] mx-auto">
          <p className="font-sans font-[600] text-[2rem] leading-[3rem] mb-[1.94rem] text-white">
            Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. PSD thực
            sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà OkHub
            mang lại cho chúng tôi.
          </p>
          <p className="font-sans font-[700] text-[1.5rem] leading-[1.875rem] mb-[0.62rem] text-white ">
            Mrs. Diễm My
          </p>
          <p className="font-sans font-[400] leading-[1.5rem] text-[1.25rem] text-white">
            Trưởng phòng Marketing PSD
          </p>
        </div>
      </div>
    </div>
  );
}
