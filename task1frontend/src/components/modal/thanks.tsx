import { FC } from 'react';
import Image from 'next/image';

interface Prop {
  onClose: () => void;
}

const Thanks: FC<Prop> = ({ onClose }) => {
  return (
    <div className="flex h-auto min-h-[16.6845rem] w-full max-w-[522px] flex-col items-center justify-center rounded-xl bg-white p-4 sm:p-6 md:p-8">
      <Image src={'/icon/Heart.svg'} alt="Heart Icon" width={42} height={42} className="mb-4" />
      <div className="h-auto min-h-[73px] w-full max-w-[330px] text-center">
        <h1 className="font-roboto text-[20px] font-[600] leading-[100%] text-black sm:text-[22px] md:text-[24px]">
          Thank you for connect with us.
        </h1>
        <p className="mt-[12px] font-roboto text-[16px] font-[600] leading-[100%] text-[#424242] sm:text-[17px] md:text-[18px]">
          Our team will contacting with you soon
        </p>
      </div>
      <button
        className="mt-6 h-[48px] w-full max-w-[330px] rounded-[6px] bg-peachRed pb-1 pl-4 pr-4 pt-1 font-ibm text-[16px] font-[500] sm:text-[17px] md:text-[18px]"
        onClick={onClose}
      >
        Done
      </button>
    </div>
  );
};

export default Thanks;
