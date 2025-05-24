import { FC } from 'react';
import Text from './text/mainText';
import Image from 'next/image';

interface Prop {
  isOpen: () => void;
}
const HeroSection: FC<Prop> = ({ isOpen }) => {
  return (
    <div className="mt-[32px]">
      <div className="flex flex-col items-center justify-center">
        <div className="break-words text-center md:h-[120px] md:w-[609px]">
          <Text>Simplify Your Life with Our Todo App</Text>
        </div>
        <div className="break-words text-center md:mt-[26.14px] md:h-[53.640750885009766px] md:w-[612px]">
          <Text variant="secondary">
            Stay organized and boost your productivity with our intuitive todo website. Experience a
            modern approach to task management that fits your lifestyle.
          </Text>
        </div>
        <div className="mt-[18.22px] flex h-[56px] w-[381px] items-center justify-center gap-[24px]">
          <button
            className="h-auto min-h-[56px] w-auto min-w-[182px] rounded-[100px] bg-peachRed font-dmsans text-[18px] font-bold leading-[20px]"
            onClick={isOpen}
          >
            Get started
          </button>
          <button className="hidden h-auto min-h-[56px] w-auto min-w-[175px] rounded-[100px] border border-peachRed font-dmsans text-[18px] font-bold leading-[20px] text-peachRed md:block">
            Learn more
          </button>
        </div>
      </div>

      <div className="mt-[108px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[16.48px] md:h-[40.1673rem] md:w-[1170px] lg:flex-row">
          <div className="h-full w-[55%] rounded-[26.37px] bg-peachRed p-[26.365] md:w-[48.4067rem] md:p-[52.73px]">
            <div>
              <div className="h-[9.2rem] w-[41.8151rem] md:h-[18.5625rem]">
                <p className="font-roboto text-[49.435px] font-[400] leading-[100%] tracking-[-2%] text-white/50 md:text-[98.87px]">
                  Organize.
                </p>
                <p className="font-roboto text-[49.435px] font-[400] leading-[100%] tracking-[-2%] text-white/80 md:text-[98.87px]">
                  Achieve.
                </p>
                <p className="font-roboto text-[49.435px] font-[400] leading-[100%] tracking-[-2%] text-white/80 md:text-[98.87px]">
                  Relax.
                </p>
              </div>
              <div className="mt-[15.125px] h-[4rem] font-roboto text-[19.77px] font-[400] leading-[160%] text-white/80 md:mt-[36.25] md:w-[41.8151rem]">
                <p>
                  Turn clutter into clarity, chaos into control, and dreams into done.bold visions
                  into market success
                </p>
              </div>
              <div className="mt-[10rem] flex h-auto min-h-[53.95774841308594px] w-auto flex-col gap-[11.19px] md:mt-[5.2988rem] md:min-w-[368.64788818359375px] md:flex-row">
                <button className="h-auto min-h-[53.95774841308594px] w-auto min-w-[178.73239135742188px] rounded-[81.57px] bg-white font-dmsans text-[14.83px] leading-[140%] tracking-[-2%] text-black">
                  Get Started Today
                </button>
                <button className="h-auto min-h-[53.95774841308594px] w-auto min-w-[178.73239135742188px] rounded-[81.57px] bg-white/10 font-dmsans text-[14.83px] leading-[140%] tracking-[-2%] text-white">
                  Discover Features
                </button>
              </div>
            </div>
          </div>
          <div className="relative hidden h-[640.6768px] w-[23.6884rem] lg:block">
            {/* Overlay */}
            <div className="absolute inset-0 z-0 rounded-[26.37px] bg-peachRed/80" />

            {/* Image */}
            <Image
              src="/image/image 1.png"
              alt="CEO Image"
              fill
              className="z-10 rounded-[26.37px] object-cover"
            />

            {/* Overlaid Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between pb-[52.73px] pl-[36.25px] pr-[36.25px] pt-[36.25px] text-white">
              <div className="flex justify-between">
                <div>
                  <p className="font-roboto text-[39.55px] font-bold leading-[100%] tracking-[-2%] text-white/50">
                    Your Tasks.
                  </p>
                  <p className="font-roboto text-[39.55px] font-bold leading-[100%] tracking-[-2%]">
                    Our Tools.
                  </p>
                </div>
                <div className="mt-2 flex h-auto min-h-[9.887324333190918px] w-auto min-w-[42.845069885253906px] gap-[6.59px]">
                  <p className="h-[9.887324333190918px] w-[9.887324333190918px] rounded-[81.57px] bg-white"></p>
                  <p className="h-[9.887324333190918px] w-[9.887324333190918px] rounded-[81.57px] border border-white/80"></p>
                  <p className="h-[9.887324333190918px] w-[9.887324333190918px] rounded-[81.57px] border border-white/80"></p>
                </div>
              </div>

              <div className="flex w-[296.63px] justify-between">
                <Image
                  src="/icon/Left.svg"
                  alt="Left Icon"
                  width={9.88}
                  height={16.47}
                  className="h-[32.95px] w-[32.95px]"
                />
                <Image
                  src="/icon/Right.svg"
                  alt="Right Icon"
                  width={9.88}
                  height={16.47}
                  className="h-[32.95px] w-[32.95px]"
                />
              </div>

              <div className="flex h-[92.73239135742188px] w-[296.63px] flex-col justify-between gap-[19.77px]">
                <Image src="/icon/Logo2.svg" width={119.42} height={26.36} alt="Logo" />
                <div className="flex w-full items-center justify-between">
                  <div>
                    <p className="font-400 font-roboto text-[19.77px] leading-[120%] tracking-[-2%] text-black">
                      Freddie Halvorson
                    </p>
                    <p className="font-400 font-roboto text-[13.18px] leading-[120%] tracking-[-2%] text-black/60">
                      Chief Productivity Enthusiast
                    </p>
                  </div>
                  <Image
                    src="/icon/videoPlayer.svg"
                    alt="Video Player"
                    width={59.32}
                    height={59.32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[40px] mt-[48.32px] flex items-center justify-center">
        <Image
          src={'/image/Logo Strip.png'}
          alt="Logo Strip"
          width={1071}
          height={42}
          className="h-[20px] w-[400.5px] md:h-[42px] md:w-[1071px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
