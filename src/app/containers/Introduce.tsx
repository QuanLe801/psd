'use client';
import React from 'react';
import Image from 'next/image';

export default function Introduce() {
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
  return (
    <div className="mt-[7.25rem] w-full max-w-[87.5rem] mx-auto">
      <div className="flex">
        <div className="w-[36.375rem] pl-[5.5rem] pt-[8.13rem] pb-[8.81rem] bg-[url('/bg-target-icon.png')] bg-cover bg-no-repeat pr-[5.5rem]">
          <div className="text-white font-anton text-[3.375rem] leading-[4.475rem] uppercase mb-[16.5rem]">
            mục tiêu dự án
          </div>
          {targetList.map((item: any, key: number) => {
            return (
              <>
                <div className="flex items-center" key={key}>
                  <Image src={item.icon} alt="" width={32} height={32} />
                  <span className="text-white font-anton text-[1.5rem] leading-[2.55rem] ml-[1rem]">
                    {item.label}
                  </span>
                </div>
                {key < targetList.length - 1 && (
                  <div className="w-full border-b-2 my-[1rem] border-white border-opacity-5" />
                )}
              </>
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
    </div>
  );
}
