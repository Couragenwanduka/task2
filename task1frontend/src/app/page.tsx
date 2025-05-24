'use client';
import { useState } from 'react';
import NavBar from '@/components/navBar';
import HeroSection from '@/components/heroSection';
import AboutSection from '@/components/aboutSection';
import Testimonials from '@/components/testimonials';
import FooterSection from '@/components/footerSection';
import Form from '@/components/modal/form';
import { useFormContext } from '@/context/userContext';
import UserList from '@/components/userList';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formData } = useFormContext();
  return (
    <main className="overflow-hidden">
      <NavBar />
      <HeroSection isOpen={() => setIsModalOpen(true)} />
      <AboutSection />
      <Testimonials />
      {formData.length > 0 && <UserList />}
      <FooterSection />
      {isModalOpen && (
        <div className="absolute inset-0 top-[129px] z-50 flex h-[4000px] items-center justify-center bg-black/40 lg:left-[135px] lg:h-[3017px] lg:w-[1155px]">
          <Form onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </main>
  );
};

export default Home;
