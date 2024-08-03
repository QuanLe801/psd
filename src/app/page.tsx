'use client';
import Achievement from './containers/Achievement';
import Header from './containers/Header';
import HeroBanner from './containers/HeroBanner';
import Introduce from './containers/Introduce';
import Produce from './containers/Produce';
import StyleGuide from './containers/StyleGuide';
import Summary from './containers/Summary';
import System from './containers/System';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div
        data-aos="fade-up"
        className="mt-[6.94rem] w-full max-w-[72.25rem] p-[1rem] rounded-3xl bg-[#1f2251] bg-opacity-10 mx-auto shadow-[0_1px_50px_0px_rgba(0,0,0,0.08)] max-h-[41.6875rem] h-full"
      >
        <HeroBanner />
      </div>
      <Introduce />
      <Produce />
      <StyleGuide />
      <Achievement />
      <System />
      <Summary />
    </main>
  );
}
