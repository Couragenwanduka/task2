import { FC } from 'react';
import Image from 'next/image';

interface AboutDivProps {
  image: string;
  number: number;
  header: string;
  description: string;
}

const AboutDiv: FC<AboutDivProps> = ({ image, number, header, description }) => {
  return (
    <div className="h-[334px] w-full max-w-[350px] rounded-[10px] bg-[#F7F7F7] pl-5 pr-5 pt-3 md:w-[263px]">
      <div className="flex justify-between">
        <div className="mt-5 flex h-[80px] w-[80px] items-center justify-center rounded-[10px] bg-white">
          <Image src={image} alt="About" width={50} height={33.111572265625} />
        </div>
        <div className="flex h-[50px] w-[55px] items-center justify-end font-raleway text-[48px] font-[800] text-blue/10">
          0{number}
        </div>
      </div>
      <div className="mt-5 h-[26px] w-[223px] font-roboto text-[18px] font-[800] leading-[26px] text-blue">
        {header}
      </div>
      <div className="mt-9 flex h-[26px] w-[90px] gap-[10px]">
        <p className="h-[6px] w-[60px] rounded-[6px] bg-peachRed"></p>
        <p className="h-[6px] w-[20px] rounded-[6px] bg-peachRed"></p>
      </div>
      <div className="h-[97px] w-[203px] font-roboto text-[16px] font-[400] leading-[150%] text-black">
        {description}
      </div>
    </div>
  );
};

export default AboutDiv;
