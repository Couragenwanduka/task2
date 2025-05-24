import React from 'react';
import Text from './text/mainText';
import AboutDiv from './ui/aboutDiv';

const AboutSection = () => {
  const aboutList = [
    {
      image: '/icon/about1.svg',
      number: 1,
      header: 'User-Friendly Interface',
      description: 'Our platform offers seamless task management to boost your efficiency.',
    },
    {
      image: '/icon/about2.svg',
      number: 2,
      header: 'Collaborate & Share Effortlessly',
      description: 'Invite team members to work together and achieve your goals faster.',
    },
    {
      image: '/icon/about3.svg',
      number: 3,
      header: 'Effortless Collaboration',
      description: 'Invite team members to work together and achieve your goals faster.',
    },
    {
      image: '/icon/about4.svg',
      number: 4,
      header: ' Seamless Access',
      description: 'Stay connected and manage your tasks on the go with ease.',
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white lg:h-[644px]">
      <div className="mt-[82px] flex h-[96px] items-center justify-center text-center md:w-[854px]">
        <Text variant="secondMain">
          Transform Your Productivity with Our Innovative To-Do List Features
        </Text>
      </div>
      <div className="grid gap-[30px] md:mt-[50px] md:grid-cols-2 lg:grid-cols-4">
        {aboutList.map((items, index) => (
          <div key={index}>
            <AboutDiv
              image={items.image}
              header={items.header}
              number={items.number}
              description={items.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
