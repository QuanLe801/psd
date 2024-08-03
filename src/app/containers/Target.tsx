import Image from 'next/image';
import React from 'react';

const targetList = [
  {
    icon: '/group-icon.svg',
    label: 'Thu hút khách hàng',
  },
  {
    icon: '/growth-icon.svg',
    label: 'Tăng khả năng tiếp cận khách hàng',
  },
  {
    icon: '/services-icon.svg',
    label: 'Dịch vụ khách hàng hiệu quả',
  },
];

export default function Target() {
  return (
    <div className="md:flex" data-aos="fade-up">
      <div className="px-[0.62rem] md:w-[36.375rem] md:pl-[5.5rem] pt-[6.25rem] md:pt-[8.13rem] pb-[6.25rem] md:pb-[8.81rem] bg-[url('/bg-target-icon.png')] bg-cover bg-no-repeat md:pr-[5.5rem]">
        <div
          className="text-white font-anton text-[1.5rem] leading-[2.1rem] md:text-[3.375rem] md:leading-[4.475rem] uppercase mb-[4.37rem] md:mb-[16.5rem]"
          data-aos="fade-up"
        >
          mục tiêu dự án
        </div>
        {targetList.map((item: any, key: number) => {
          return (
            <div key={key}>
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay={`${key * 100}`}
              >
                <Image src={item.icon} alt="" width={32} height={32} />
                <span className="text-white font-anton text-[1rem] leading-[1.7rem] md:text-[1.5rem] md:leading-[2.55rem] ml-[1rem]">
                  {item.label}
                </span>
              </div>
              {key < targetList.length - 1 && (
                <div className="w-full border-b-2 my-[1rem] border-white border-opacity-5" />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex-auto">
        <Image
          src={'/bg-target.png'}
          alt="target"
          width={1000}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
