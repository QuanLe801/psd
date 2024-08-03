import Image from 'next/image';
import React from 'react';
import { styleGuides } from '../utils/constants';

const themeCode = [
  { code: '#EBA820', img: '/base-color-yellow.svg' },
  { code: '#006DF9', img: '/base-color-blue.svg' },
  { code: '#555355', img: '/base-color-brown.svg' },
];

export default function StyleGuide() {
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
        <span className="absolute translate-y-[450%] h-8 -rotate-90 origin-top-left font-sans text-2xl text-black54 uppercase">
          {code}
        </span>
        <Image
          src={img}
          alt="theme-base"
          width={1000}
          height={1000}
          className="w-[11.875rem] h-[20.875rem] ml-8"
        />
      </div>
    );
  };

  return (
    <div className="mt-[7.5rem] pb-[8.47rem]">
      <h3
        className="mb-[1.5rem] text-center text-blue font-anton text-[3.375rem] leading-[4.725rem] uppercase"
        data-aos="fade-up"
      >
        COLOR
      </h3>
      <h4
        className="w-full max-w-[55.1875rem] text-center mx-auto font-sans text-2xl leading-[2.55rem] text-black54"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        PSD lựa chọn màu sắc theo tone chủ đạo vàng và xanh pha vào một chút đen
        xám mang lại cho người dùng trải nghiệm mới mẻ vui tươi mang vào đó độ
        tin cậy và bảo vệ môi trường
      </h4>
      <div className="flex justify-center w-full gap-[14.38rem] mt-[2.81rem] mb-[15.56rem]">
        {themeCode.map((item: { code: string; img: string }, key: number) => (
          <ThemeItems
            code={item.code}
            img={item.img}
            key={key}
            aosDelay={key}
          />
        ))}
      </div>
      <div className="px-[6.62rem] bg-[#d9d9d9] bg-opacity-10">
        <div className="flex -translate-y-[2.1rem]">
          <div className="w-full max-w-[25.75rem] mr-[11.81rem]">
            <h3
              className="font-anton text-black54 text-[4rem] uppercase mb-[5.62rem] leading-[100%]"
              data-aos="fade-up"
            >
              Typography
            </h3>
            <div
              className="font-sans text-black text-2xl mb-[1rem]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Primary Typeface
            </div>
            <div
              className="font-anton text-black text-[3.125rem]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Anton
            </div>
            <div
              className="font-anton text-black text-2xl leading-[1.875rem] mb-[3.12rem]"
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
              className="font-sans text-black text-[2.75rem]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              San Francisco Display
            </div>
            <div
              className="font-sans text-black text-2xl leading-[1.875rem]"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Bold/ Semibold/ Medium/ Regular
            </div>
          </div>
          <div className="w-full">
            {styleGuides.map((item: any, key: number) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${(key + 1) * 100}`}
                key={key}
                style={{ paddingBottom: item.paddingBottom }}
                className={`first:mt-0 mt-[1.87rem] pl-4 grid grid-cols-[48.55%_32.55%_auto] last:border-b-0 border-b-[0.0625rem] border-opacity-15 border-[black]`}
              >
                <span
                  className={`font-${item.firstColumn.fontFamily} text-black ${
                    item.firstColumn.uppercase && 'uppercase'
                  } leading-[100%]`}
                  style={{
                    fontSize: item.firstColumn.fontSize,
                    fontWeight: item.firstColumn.fontWeight,
                  }}
                >
                  {item.firstColumn.title}
                </span>
                <span
                  className={`font-sans text-black text-[1.125rem} font-[300] opacity-75 leading-[100%]`}
                >
                  {item.secondColumn.title}
                </span>
                <span
                  className={`font-sans text-black text-[1.125rem] font-[300] opacity-75 leading-[100%]`}
                >
                  {item.thirdColumn.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[2.1rem] flex justify-center">
        <Image
          src={'/staff.png'}
          alt="staff"
          width={1000}
          height={1000}
          className="w-[36.97506rem] h-[45.22819rem] mr-[6rem]"
          data-aos="fade-up"
          data-aos-delay={`100`}
        />
        <div className="mt-[12.41rem]">
          <Image
            src={'/quote.svg'}
            alt="quote"
            width={1000}
            height={1000}
            className="w-[4.63rem] h-[4.75rem] mb-[2.5rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <h2
            className="font-anton text-[3.375rem] text-black54 uppercase w-full max-w-[42.5rem]"
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
