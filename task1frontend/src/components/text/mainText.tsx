import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface TextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'secondMain' | 'testimonials' | 'secondary2';
}

const Text: FC<TextProps> = ({ children, variant = 'primary' }) => {
  return (
    <div
      className={clsx(
        'font-roboto',
        variant === 'primary' &&
          'text-[25px] font-bold leading-[120%] text-neutralBlue md:text-[50px]',
        variant === 'secondary' &&
          'text-[12px] font-[400] leading-[150%] text-neutralBlue2 md:text-[18px]',
        variant === 'secondMain' && 'text-[20px] font-bold leading-[120%] text-blue md:text-[40px]',
        variant === 'testimonials' &&
          'text-[24px] font-bold leading-[120%] text-blue md:text-[48px]',
        variant === 'secondary2' && 'text-[12px] font-[400] leading-[150%] text-blue md:text-[18px]'
      )}
    >
      {children}
    </div>
  );
};

export default Text;
