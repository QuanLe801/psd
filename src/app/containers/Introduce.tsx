'use client';
import React from 'react';
import Target from './Target';
import SubIntro from './SubIntro';
import OurClients from './OurClients';

export default function Introduce() {
  return (
    <>
      <div className="md:mt-[7.25rem] w-full max-w-[87.5rem] mx-auto">
        <Target />
      </div>
      <SubIntro />
      <OurClients />
    </>
  );
}
