import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Marquee from 'react-fast-marquee';

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

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString());

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="bg-[url('/our-clients.png')] bg-no-repeat bg-cover bg-right">
        <div className="my-[12.94rem] ml-[8.37rem] max-w-[35.375rem]">
          <div
            className="text-white font-anton text-[3.375rem] leading-[4.725rem] uppercase"
            data-aos="fade-up"
          >
            Khách hàng của PSd
          </div>
          <div
            className="text-white font-sans text-2xl leading-[2.4rem] mt-8"
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
      <div className="flex mt-[7.5rem] mb-[3.75rem]">
        <div className="mr-[6.25rem] ml-[8.37rem] max-w-[44.5625rem]">
          <div
            className="text-blue text-[3.375rem] leading-[4.725rem] uppercase font-anton mb-8"
            data-aos="fade-up"
          >
            giới thiệu chung <span className="text-yellow block">về PSD</span>
          </div>
          <div
            className="text-black54 font-sans text-2xl leading-[2.55rem] lowercase mb-[2.53rem]"
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
            <div className="font-anton text-yellow text-8xl leading-[8.4rem] uppercase text-center">
              <div>
                {formatNumber(count.agency)}
                <span>+</span>
              </div>
              <div className="text-2xl leading-[2.55rem] text-black54">
                đại lý
              </div>
            </div>
            <div className="font-anton text-yellow text-8xl leading-[8.4rem] uppercase text-center">
              <div>{formatNumber(count.wareHouse)}</div>
              <div className="text-2xl leading-[2.55rem] text-black54">
                KHO BÃI
              </div>
            </div>
            <div className="font-anton text-yellow text-8xl leading-[8.4rem] uppercase text-center">
              <div>{formatNumber(count.province)}</div>
              <div className="text-2xl leading-[2.55rem] text-black54">
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
      <Marquee className="uppercase font-anton text-[#D9D9D945] text-[15.625rem]  opacity-45 h-full overflow-y-clip">
        <span className="after:content-[''] after:ml-11 h-full">
          Hệ thống phân phối
        </span>
      </Marquee>
    </>
  );
}
