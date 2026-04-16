import React from 'react';
import MainLayout from '@layouts/MainLayout';
import HeroSection from '@/Section/Hero/HeroSection';
import AboutSection from '@/Section/About/AboutSection';
import FeaturedCoursesSection from '@/Section/FeaturedCourses/FeaturedCoursesSection';
import Faqs from '@/Section/FAQ/faqs';
import PolicySection from '@/Section/Policy/policySection';
import ContactSection from '@/Section/Contact/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <FeaturedCoursesSection />
      <Faqs />
      <PolicySection />
      <ContactSection />
    </MainLayout>
  );
}
