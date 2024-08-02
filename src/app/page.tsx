'use client';
import Header from './containers/Header';
import HeroBanner from './containers/HeroBanner';
import Introduce from './containers/Introduce';
import Produce from './containers/Produce';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroBanner />
      <Introduce />
      <Produce />
    </main>
  );
}
