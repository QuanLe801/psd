'use client';
import Image from 'next/image';
import React from 'react';

export default function HeroBanner() {
  return (
    <div className="overflow-y-scroll no-scrollbar rounded-3xl max-h-[37.6rem] h-full">
      <Image
        src="/image/banner1.png"
        alt="banner1"
        width={1124}
        height={635}
        className="rounded-3xl object-cover w-full"
      />
    </div>
  );
}
