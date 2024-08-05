import Image from 'next/image';
import React, { useState } from 'react';
import { styleGuides } from '../utils/constants';
import useWindowSize from '../hooks/useWindowSize';

const themeCode = [
  { code: '#EBA820', img: '/base-color-yellow.svg' },
  { code: '#006DF9', img: '/base-color-blue.svg' },
  { code: '#555355', img: '/base-color-brown.svg' },
];

export default function StyleGuide() {
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleShowMore = () => {
    setShowMore(true);
  };

  const ThemeItems = ({
    code,
    img,
    aosDelay,
  }: {
    code: string;
    img: string;
    aosDelay: number;
  }) => {
    return (
      <div data-aos="fade-up" data-aos-delay={`${aosDelay * 200}`}>
        <span className="absolute translate-y-[260%] md:translate-y-[450%] md:h-8 -rotate-90 origin-top-left font-sans md:text-2xl text-[0.625rem] text-black54 uppercase">
          {code}
        </span>
        <Image
          src={img}
          alt="theme-base"
          width={1000}
          height={1000}
          className="md:w-[11.875rem] w-[3.16431rem] md:h-[20.875rem] h-[5.5625rem] ml-[1.3225rem] md:ml-8"
        />
      </div>
    );
  };

  return (
    <div className="md:px-0 mt-[4.38rem] md:mt-[7.5rem] ">
      <h3
        className="px-[1.5rem]  mb-[1.5rem] text-center text-blue font-anton text-[1.5rem] leading-[2.1rem] md:text-[3.375rem] md:leading-[4.725rem] uppercase"
        data-aos="fade-up"
      >
        COLOR
      </h3>
      <h4
        className="px-[1.5rem] w-full max-w-[55.1875rem] text-center mx-auto font-sans md:text-2xl md:leading-[2.55rem] text-[0.875] leading-[1.3125rem] text-black54"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        PSD lựa chọn màu sắc theo tone chủ đạo vàng và xanh pha vào một chút đen
        xám mang lại cho người dùng trải nghiệm mới mẻ vui tươi mang vào đó độ
        tin cậy và bảo vệ môi trường
      </h4>
      <div className="px-[1.5rem] flex justify-between md:justify-center w-full md:gap-[14.38rem] mt-[2rem] md:mt-[2.81rem] mb-[6.88rem] md:mb-[15.56rem]">
        {themeCode.map((item: { code: string; img: string }, key: number) => (
          <ThemeItems
            code={item.code}
            img={item.img}
            key={key}
            aosDelay={key}
          />
        ))}
      </div>
      <div className="px-[0.62rem] md:px-[6.62rem] bg-[#d9d9d9] bg-opacity-10">
        <div className="md:flex md:-translate-y-[2.1rem]">
          <div className="w-full max-w-[25.75rem] mr-[11.81rem]">
            <h3
              className="font-anton text-black54 md:text-[4rem] text-[2.5rem] leading-[100%] uppercase pt-[2.5rem] md:pt-0 mb-[5rem] md:mb-[5.62rem] "
              data-aos="fade-up"
            >
              Typography
            </h3>
            <div
              className="font-sans text-black text-[1rem] md:text-2xl mb-[1rem]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Primary Typeface
            </div>
            <div
              className="font-anton text-black text-[2.5rem] md:text-[3.125rem]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Anton
            </div>
            <div
              className="font-anton text-black text-[1.5rem] md:text-2xl leading-[1.875rem] mb-[3.12rem]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Bold/ Semibold/ Medium/ Regular
            </div>
            <div
              className="font-sans text-black text-2xl mb-[1rem]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Supporting Typeface
            </div>
            <div
              className="font-sans text-black mb-[0.5rem] text-[2rem] md:text-[2.75rem]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              San Francisco Display
            </div>
            <div
              className="font-sans text-black text-[1rem] md:text-2xl leading-[1.875rem] mb-[2rem] md:mb-0"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Bold/ Semibold/ Medium/ Regular
            </div>
          </div>
          <div
            className={`w-full ${
              !showMore && 'h-[35rem] overflow-hidden'
            } md:h-auto relative`}
          >
            <div
              className={`md:hidden ${
                showMore ? 'hidden' : 'absolute'
              }  w-full h-full bg-[url('/bg-linear.svg')] z-20 bg-no-repeat bg-cover bottom-0 mx-auto`}
            >
              <div
                className={`absolute bottom-0 w-full flex flex-col justify-center animate-bounce cursor-pointer`}
                onClick={handleShowMore}
              >
                <span className="mx-auto font-sans text-[1rem] leading-[1.875rem] text-[black]">
                  Xem Thêm
                </span>
                <Image
                  src={'/arrow-down.svg'}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="mx-auto"
                />
              </div>
            </div>
            {styleGuides.map((item: any, key: number) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${(key + 1) * 100}`}
                key={key}
                style={{ paddingBottom: item.paddingBottom }}
                className={`first:mt-0 mt-[1.87rem] md:pl-4 grid grid-cols-[48.55%_32.55%_auto] last:border-b-0 border-b-[0.0625rem] border-opacity-15 border-[black]`}
              >
                <span
                  className={`font-${item.firstColumn.fontFamily} text-black ${
                    item.firstColumn.uppercase && 'uppercase'
                  } leading-[100%]`}
                  style={{
                    fontSize: !isMobile
                      ? item?.firstColumn?.fontSize
                      : item?.firstColumn?.fontMobile,
                    fontWeight: item?.firstColumn?.fontWeight,
                  }}
                >
                  {item.firstColumn.title}
                </span>
                <span
                  className={`font-sans text-black text-[1.125rem} font-[300] opacity-75 pl-[1rem] md:pl-0 md:leading-[100%]`}
                >
                  {item.secondColumn.title}
                </span>
                <span
                  className={`font-sans text-black text-[1.125rem] font-[300] opacity-75 md:leading-[100%] text-right md:text-left`}
                >
                  {item.thirdColumn.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#d9d9d9] bg-opacity-10 px-[0.62rem] md:px-0 mt-[2.1rem] md:flex md:justify-center pb-[6.87rem] md:pb-[8.47rem]">
        <Image
          src={'/staff.png'}
          alt="staff"
          width={1000}
          height={1000}
          className="md:w-[36.97506rem] md:h-[45.22819rem] mr-[6rem]"
          data-aos="fade-up"
          data-aos-delay={`100`}
        />
        <div className="mt-[2.92rem] md:mt-[12.41rem]">
          <Image
            src={'/quote.svg'}
            alt="quote"
            width={1000}
            height={1000}
            className="w-[2.6875rem] h-[2.125rem] md:w-[4.63rem] md:h-[4.75rem] mb-[1rem] md:mb-[2.5rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <h2
            className="font-anton text-[2rem] md:text-[3.375rem] text-black54 uppercase w-full max-w-[42.5rem]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Luôn ĐẶT YẾU TỐ{' '}
            <span className="text-yellow">
              UY TÍN, CAM KẾT, TUÂN THỦ PHÁP LUẬT,
            </span>{' '}
            TUÂN THỦ CHÍNH SÁCH CỦA HÃNG LÊN HÀNG ĐẦU.
          </h2>
        </div>
      </div>
    </div>
  );
}
