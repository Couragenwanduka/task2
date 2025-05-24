import React from 'react';
import Text from './text/mainText';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-white p-5 pt-[40px] lg:p-0">
      <div className="flex h-auto min-h-[109px] flex-col justify-center lg:ml-[149px] lg:w-[559px]">
        <div>
          <Text variant="testimonials">Customer Testimonials</Text>
        </div>
        <div>
          <Text variant="secondary2">
            This tool has transformed my productivity and organization!
          </Text>
        </div>
      </div>

      <div className="relative ml-[149px] hidden h-[763px] w-[1140px] lg:flex">
        <div className="h-[590px] w-[471px]">
          <Image src={'/icon/Vector.png'} alt="vector" width={471} height={590} />
        </div>
        <div className="absolute left-[80px] top-[50px] flex h-auto min-h-[490px] w-[1085px] items-center justify-center gap-[70px]">
          <div className="h-auto min-h-[303px] w-[557px] bg-white text-black">
            <p className="h-[144px] w-[557px] font-roboto text-[36px] font-bold leading-[48px] text-[#202020]">
              Using this website has made my tasks so much easier! I can't imagine my day without
              it."
            </p>
            <div className="mt-[30px] flex gap-2">
              <div>
                <Image src={'/icon/illustration.svg'} alt="Icon" width={75} height={30} />
              </div>
              <div>
                <p className="font-roboto text-[18px] font-[800] leading-[100%]">Sherri Cronin</p>
                <p className="font-roboto text-[16px] font-[400] leading-[150%]">
                  Project Manager, TechCorp
                </p>
              </div>
            </div>
            <div className="mt-[40px] flex h-auto min-h-[40px] w-auto min-w-[92px] gap-[12px]">
              <button className="flex h-auto min-h-[40px] w-auto min-w-[40px] items-center justify-center rounded-[100px] border border-peachRed">
                <Image src={'/icon/arrowleft.svg'} alt="vector" width={16} height={16} />
              </button>
              <button className="flex h-auto min-h-[40px] w-auto min-w-[40px] items-center justify-center rounded-[100px] bg-peachRed">
                <Image
                  src={'/icon/Vector (1).svg'}
                  alt="vector"
                  width={7.040002822876084}
                  height={11.519997596740897}
                />
              </button>
            </div>
          </div>
          <div className="relative h-[370px] w-[355px]">
            {/* Base Image */}
            <Image
              src="/icon/Vector (2).svg"
              alt="vector"
              width={355}
              height={380}
              className="absolute left-0 top-0 z-0"
            />

            {/* Overlay Image - Centered */}
            <div className="absolute left-[47%] top-[52.5%] z-10 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/image/Image.png"
                alt="Female Picture"
                width={330}
                height={340}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:-ml-3 lg:-mt-[95px] lg:flex-row lg:justify-center">
        <div className="flex h-auto min-h-[395px] flex-col items-center gap-[16px] lg:w-[1155px] lg:flex-row">
          <div>
            <Image src={'/image/Photo rectangle.png'} alt="Image" width={585} height={395} />
          </div>
          <div className="md:w-[553px]">
            <p className="font-roboto text-[24px] font-bold leading-[120%] text-[#202020] md:text-[48px]">
              Start Organizing Your Life Today
            </p>
            <p className="mt-[24px] font-roboto text-[18px] font-[400] leading-[150%] text-[#202020]">
              Join us now and transform your productivity with our intuitive to-do list platform!
            </p>
            <div className="mt-[32px] flex h-auto min-h-[48px] w-auto min-w-[251px] gap-[16px]">
              <button className="w-auto min-w-[104px] bg-peachRed font-dmsans text-[16px] font-[400] text-white">
                Sign Up
              </button>
              <button className="w-auto min-w-[131px] border border-peachRed font-dmsans text-[16px] font-[400] text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
