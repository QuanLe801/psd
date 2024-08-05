import React from 'react';
import Image from 'next/image';
import { iconSystem } from '../utils/constants';

export default function System() {
  return (
    <div
      style={{ backgroundPositionX: '18.31rem', backgroundPositionY: '98%' }}
      className="bg-[url('/logo.svg')] bg-no-repeat overflow-hidden px-[0.62rem] md:px-0"
    >
      <div className="mt-[3.75rem] md:mt-[14.62rem] md:flex justify-center mb-[6rem] md:mb-[3.44rem]">
        <div className="mb-[2rem] md:mb-0 md:mr-[2.87rem]">
          <div
            className="font-anton text-[1.5rem] md:text-[1.875rem] md:leading-[2.625rem] uppercase text-blue"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            các hệ thống phân phối <span className="text-yellow">PSD</span>
          </div>
          <div
            className="rounded-3xl bg-[#d9d9d9] -translate-x-4 p-2 md:p-4 bg-opacity-30 shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] mt-[1.5rem] md:mt-[1.81rem]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              src={'/system-leftColumn.jpg'}
              alt="system-leftColumn"
              width={963}
              height={553}
              className="md:w-[40.8125rem] md:h-[22.875rem] rounded-2xl "
            />
          </div>
        </div>
        <div>
          <div
            className="md:shadow-[0_1px_50px_0px_rgba(0,0,0,0.16)] rounded-3xl"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="rounded-3xl md:bg-[#d9d9d9] p-2 md:p-4 md:bg-opacity-30 md:shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)]">
              <Image
                src={'/system-rightColumn.jpg'}
                alt="system-rightColumn"
                width={963}
                height={553}
                className="md:w-[40.8125rem] md:h-[22.875rem] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex mb-[9.83rem] md:mb-[12.12rem]">
        <div className="md:ml-[6.25rem] md:mr-[16.87rem]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="uppercase font-anton text-blue text-[1.5rem] leading-[2.1rem] md:text-[1.875rem] md:leading-[2.625rem] md:ml-[0.94rem] mb-4 md:mb-[1.87rem] md:mt-[8.45rem]"
          >
            Bộ icon Glassmorphism
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-sans text-black54 md:mb-0 mb-[1.5rem] text-[0.875rem] leading-[1.3125rem] md:text-[1rem] md:leading-[1.7rem] w-full max-w-[25.9375rem]"
          >
            Glassmorphism là xu hướng mới nhất trong thiết kế ui, dựa trên sự
            kết hợp của đổ bóng, độ trong suốt và độ mờ để tạo thêm chiều sâu
            cho thiết kế icon.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[3.12rem] gap-y-[2.5rem]">
          {iconSystem.map((item: string, key: number) => (
            <Image
              data-aos="fade-left"
              data-aos-delay={`${(key + 6) * 100}`}
              key={key}
              src={item}
              alt="logo-system"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
