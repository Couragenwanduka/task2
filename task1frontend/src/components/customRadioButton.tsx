import React, { useState, FC } from 'react';

interface Props {
  choosed: (value: 'Female' | 'Male') => void;
}

const CustomRadioButton: FC<Props> = ({ choosed }) => {
  const [selected, setSelected] = useState<'Female' | 'Male' | null>(null);

  const handleSelect = (value: 'Female' | 'Male') => {
    setSelected(value);
    choosed(value);
  };

  return (
    <div className="flex gap-4">
      {/* Female */}
      <label className="flex h-[40px] w-[133px] cursor-pointer items-center gap-2 rounded-sm bg-peachRed2 px-3 py-2">
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={() => handleSelect('Female')}
          className="hidden"
        />
        <span
          className={`relative flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
            selected === 'Female' ? 'border-peachRed' : 'border-[#AEAEB2]'
          }`}
        >
          {selected === 'Female' && (
            <span className="absolute h-[10px] w-[10px] rounded-full bg-peachRed" />
          )}
        </span>
        <span className="font-ibm text-base font-[400] leading-[150%] text-[#424242CC]/80">
          Female
        </span>
      </label>

      {/* Male */}
      <label className="flex h-[40px] w-[133px] cursor-pointer items-center gap-2 rounded-sm bg-peachRed2 px-3 py-2">
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={() => handleSelect('Male')}
          className="hidden"
        />
        <span
          className={`relative flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
            selected === 'Male' ? 'border-peachRed' : 'border-[#AEAEB2]'
          }`}
        >
          {selected === 'Male' && (
            <span className="absolute h-[10px] w-[10px] rounded-full bg-peachRed" />
          )}
        </span>
        <span className="font-ibm text-base font-[400] leading-[150%] text-[#424242CC]/80">
          Male
        </span>
      </label>
    </div>
  );
};

export default CustomRadioButton;
