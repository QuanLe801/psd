import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Marquee from 'react-fast-marquee';
import ScrollTrigger from 'react-scroll-trigger';

export default function OurClients() {
  const [count, setCount] = useState<{
    agency: number;
    wareHouse: number;
    province: number;
  }>({
    agency: 800,
    wareHouse: 1,
    province: 7,
  });

  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString());

  useEffect(() => {
    if (!visible) return;
    // Interval for agency counter
    const intervalId1 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.agency >= 1000) {
          clearInterval(intervalId1);
          return prevCount;
        }
        return { ...prevCount, agency: prevCount.agency + 1 };
      });
    }, 10);

    // Interval for wareHouse counter
    const intervalId2 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.wareHouse >= 4) {
          clearInterval(intervalId2);
          return prevCount;
        }
        return { ...prevCount, wareHouse: prevCount.wareHouse + 1 };
      });
    }, 200);

    // Interval for province counter
    const intervalId3 = setInterval(() => {
      setCount(prevCount => {
        if (prevCount.province >= 63) {
          clearInterval(intervalId3);
          return prevCount;
        }
        return { ...prevCount, province: prevCount.province + 1 };
      });
    }, 40);

    // Cleanup the intervals on component unmount
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [visible]);

  return (
    <>
      <div className="px-[0.63rem] md:bg-[url('/our-clients.png')] bg-[url('/our-clients-mobile.png')] bg-no-repeat bg-cover bg-right">
        <div className="md:my-[12.94rem] md:ml-[6.25rem] md:max-w-[35.375rem]">
          <div
            className="mt-[4.37rem] md:mt-0 text-white mb-[1rem] md:mb-0 font-anton md:text-[3.375rem] md:leading-[4.725rem] text-[1.5rem] leading-[2.15rem] uppercase"
            data-aos="fade-up"
          >
            Khách hàng của PSd
          </div>
          <div
            className="text-justify mb-[23.5rem] md:mb-0 text-white font-sans md:text-2xl md:leading-[2.4rem] text-[0.875rem] leading-[1.3125rem] md:mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            THÀNH CÔNG LỚN NHẤT CỦA PSD HIỆN NAY LÀ SỰ TÍN NHIỆM CỦA ĐỐI TÁC,
            KHÁCH HÀNG VÌ TINH THẦN TUYỆT ĐỐI TÔN TRỌNG CHIẾN LƯỢC, CHÍNH SÁCH
            CỦA HÃNG. DÙ KINH DOANH PHÂN PHỐI BẤT CỨ SẢN PHẨM NÀO, PSD LUÔN ĐẶT
            YẾU TỐ UY TÍN, CAM KẾT, TUÂN THỦ PHÁP LUẬT, TUÂN THỦ CHÍNH SÁCH CỦA
            HÃNG LÊN HÀNG ĐẦU.
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-[3.12rem] md:mt-[7.5rem] md:mb-[3.75rem] mb-[1rem] overflow-hidden">
        <div className="mx-[0.62rem] md:mr-[6.25rem] md:ml-[8.37rem] max-w-[44.5625rem]">
          <div
            className="text-blue md:text-[3.375rem] md:leading-[4.725rem] text-[1.5rem] uppercase font-anton mb-[1rem] md:mb-8  mt-[2rem] md:mt-0"
            data-aos="fade-up"
          >
            giới thiệu chung{' '}
            <span className="text-yellow inline md:block">về PSD</span>
          </div>
          <div
            className="text-justify text-black54 font-sans text-[0.875rem] leading-[1.3125rem] md:text-2xl md:leading-[2.55rem] lowercase mb-[2.53rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="uppercase">PSD</span> LÀ ĐƠN VỊ THÀNH VIÊN CỦA TỔNG
            CÔNG TY PETROSETCO THUỘC TẬP ĐOÀN DẦU KHÍ QUỐC GIA VIỆT NAM, HOẠT
            ĐỘNG THEO MÔ HÌNH CÔNG TY CỔ PHẦN. SAU NHIỀU NĂM THÀNH LẬP, PSD
            KHẲNG ĐỊNH NĂNG LỰC KINH DOANH VỮNG CHẮC VỚI DOANH SỐ 9000 TỶ ĐỒNG,
            LIÊN TỤC TĂNG TRƯỞNG HÀNG NĂM, ĐÓNG GÓP TRÊN 50% DOANH THU VÀ LỢI
            NHUẬN CHO TỔNG CÔNG TY PETROSETCO.
          </div>
          <div
            className="grid grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="font-anton text-yellow text-[1.875rem] leading-[2.625rem] md:text-8xl md:leading-[8.4rem] uppercase text-center">
              <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                {formatNumber(count.agency)}
                <span>+</span>
              </ScrollTrigger>
              <div className="text-[1rem] leading-[1.7rem] md:text-2xl md:leading-[2.55rem] text-black54">
                đại lý
              </div>
            </div>
            <div className="font-anton text-yellow text-[1.875rem] leading-[2.625rem] md:text-8xl md:leading-[8.4rem] uppercase text-center">
              <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                <div>{formatNumber(count.wareHouse)}</div>
              </ScrollTrigger>

              <div className="text-[1rem] leading-[1.7rem] md:text-2xl md:leading-[2.55rem] text-black54">
                KHO BÃI
              </div>
            </div>
            <div className="font-anton text-yellow text-[1.875rem] leading-[2.625rem] md:text-8xl md:leading-[8.4rem] uppercase text-center">
              <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                <div>{formatNumber(count.province)}</div>
              </ScrollTrigger>
              <div className="text-[1rem] leading-[1.7rem] md:text-2xl md:leading-[2.55rem] text-black54">
                tỉnh thành
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto" data-aos="flip-left">
          <Image
            src="/general-intro.png"
            alt="general-intro"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Marquee className="uppercase font-anton text-[#D9D9D945] md:text-[15.625rem] text-[7.5rem] opacity-45 h-full overflow-y-clip">
        <span className="after:content-[''] after:ml-11 h-full">
          Hệ thống phân phối
        </span>
      </Marquee>
    </>
  );
}
