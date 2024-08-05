import Image from 'next/image';
import React from 'react';

export default function Summary() {
  return (
    <div className="md:flex md:bg-[url('/summary-bg.png')] bg-[url('/summary-bg-mobile.png')] bg-no-repeat bg-cover bg-right-center mb-[20.81rem] overflow-hidden">
      <div className="mb-[3.25rem] md:mb-0">
        <Image
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          src={'/summary.png'}
          alt="summary"
          width={1000}
          height={1000}
          className="h-[26.3125rem] md:h-auto md:max-w-[50.9375rem] object-cover"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        className="flex-auto flex justify-center flex-col px-[0.63rem] md:px-0"
      >
        <Image
          src={'/quote2.svg'}
          alt="quote2"
          width={1000}
          height={1000}
          className="w-[2.41988rem] h-[1.875rem] md:w-[5.16238rem] md:h-[4rem] md:ml-[2.8rem]"
        />
        <div className="max-w-[33.75rem] mt-[1rem] md:mt-[1.69rem] mx-auto mb-[4.75rem] md:mb-0">
          <p className="font-sans font-[600] text-[1rem] leading-[1.5rem] md:text-[2rem] md:leading-[3rem] mb-[1.94rem] text-white">
            Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. PSD thực
            sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà OkHub
            mang lại cho chúng tôi.
          </p>
          <p className="font-sans font-[700] md:text-[1.5rem] md:leading-[1.875rem] text-[1.125rem] leading-[1.875rem] mb-[0.62rem] text-white ">
            Mrs. Diễm My
          </p>
          <p className="font-sans font-[400] leading-[1rem] text-[1rem] md:leading-[1.5rem] md:text-[1.25rem] text-white">
            Trưởng phòng Marketing PSD
          </p>
        </div>
      </div>
    </div>
  );
}
