import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  const footerList = [
    {
      link: 'Home Page',
      Resources: 'Help Center',
      connect: { image: '/icon/Facebook.svg', text: 'Facebook' },
    },
    {
      link: 'About Us',
      Resources: 'User Guide',
      connect: { image: '/icon/Instagram.svg', text: 'Instagram' },
    },
    {
      link: 'Contact Us',
      Resources: 'Community Forum',
      connect: { image: '/icon/X.svg', text: 'X' },
    },
    {
      link: 'Blog Posts',
      Resources: 'Feedback',
      connect: { image: '/icon/LinkedIn.svg', text: 'LinkedIn' },
    },
    {
      link: 'FAQs',
      Resources: 'Support',
      connect: { image: '/icon/Youtube.svg', text: 'YouTube' },
    },
  ];
  return (
    <div className="flex items-center justify-center bg-white p-10 pt-[80.81px] md:p-0">
      <div className="pt-[65px flex h-auto flex-col items-center md:w-full lg:min-h-[466.8125px] lg:w-[1170px] lg:pb-[65px] lg:pl-[52px] lg:pr-[52px]">
        <div className="flex flex-col items-center justify-between gap-[208px] lg:flex-row">
          <div className="flex h-auto flex-col lg:min-h-[243.25px] lg:w-[406.25px]">
            <Image src={'/icon/logo.svg'} alt="Logo Icon" width={170} height={100} />
            <p className="font-roboto text-[13px] font-[400] leading-[150%] text-black">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <div className="mt-[19.5px] flex gap-[13px] lg:min-h-[39.5px]">
              <input
                type="text"
                placeholder="Your email here"
                className="h-full gap-[6.5px] border-[0.81px] border-black p-[10px] md:w-[296.5625px]"
              />
              <button className="h-full w-[96.6875px] rounded-[6px] bg-peachRed pb-[11px] pl-[19.5px] pr-[19.5px] pt-[11px] font-dmsans text-[13px] leading-[150%]">
                Join
              </button>
            </div>
            <p className="leaidng-[150%] mt-2 font-roboto text-[9.75px] font-[400] text-black">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>
          <div className="hidden h-auto w-full md:block lg:min-h-[195.5px] lg:w-[555.75px]">
            {/* Headers */}
            <div className="mb-4 grid gap-[32.5px] font-roboto text-[13px] font-[600] text-black md:grid-cols-3">
              <div>Useful Links</div>
              <div>Resources</div>
              <div>Connect With Us</div>
            </div>

            {/* Content rows */}
            <div className="grid grid-cols-3 gap-[32.5px] text-black">
              {/* Column 1: Links */}
              <div className="flex h-[30px] flex-col gap-2 md:w-[163.5833282470703px]">
                {footerList.map((item, index) => (
                  <div key={index} className="font-roboto text-[11.38px] font-[400] leading-[150%]">
                    {item.link}
                  </div>
                ))}
              </div>

              {/* Column 2: Resources */}
              <div className="flex flex-col gap-2">
                {footerList.map((item, index) => (
                  <div key={index} className="font-roboto text-[11.38px] font-[400] leading-[150%]">
                    {item.Resources}
                  </div>
                ))}
              </div>

              {/* Column 3: Connect With Us */}
              <div className="flex flex-col gap-2">
                {footerList.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={item.connect.image}
                      alt={item.connect.text}
                      width={19.5}
                      height={19.5}
                    />
                    <p className="font-roboto text-[11.38px] font-[400] leading-[150%]">
                      {item.connect.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between border-black pt-5 text-black md:w-full md:border-t lg:w-[1170px]">
          <p className="font-roboto text-[11.38px]">© 2024 Osumare. All rights reserved.</p>
          <div className="flex justify-between gap-[19.5px] font-roboto text-[11.38px] font-[400] underline">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
