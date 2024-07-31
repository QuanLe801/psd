'use client';
import Image from 'next/image';
import React from 'react';

export default function HeroBanner() {
  return (
    <div className="w-full max-w-[72.25rem] p-[1rem] rounded-3xl bg-[#1f2251] bg-opacity-10 mx-auto mt-[6.94rem] shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] max-h-[41.6875rem] h-full">
      <div className="overflow-y-scroll no-scrollbar rounded-3xl max-h-[37.6rem] h-full">
        <Image
          src="/image/banner1.png"
          alt="banner1"
          width={1124}
          height={635}
          className="rounded-3xl object-cover w-full"
        />
      </div>
    </div>
  );
}
