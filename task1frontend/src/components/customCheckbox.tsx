import React from 'react';

interface Props {
  text: string;
  checked: boolean;
  onChange: (text: string) => void;
}

const CustomCheckbox = ({ text, checked, onChange }: Props) => {
  return (
    <label className="flex h-auto min-h-[40px] w-[220px] cursor-pointer select-none items-center gap-[10px] rounded-sm bg-peachRed2 pb-2 pl-3 pr-3 pt-2">
      <input type="checkbox" checked={checked} onChange={() => onChange(text)} className="hidden" />
      <span
        className={`relative flex h-5 w-5 items-center justify-center rounded border transition-colors ${
          checked ? 'border-peachRed bg-peachRed' : 'border-[#AEAEB2] bg-transparent'
        }`}
      >
        {checked && (
          <svg
            className="absolute h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="font-ibm text-[16px] font-[400] text-[#424242CC]/80">{text}</span>
    </label>
  );
};

export default CustomCheckbox;
