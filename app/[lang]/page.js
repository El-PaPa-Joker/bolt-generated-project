'use client'
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import BlogSection from '../../components/BlogSection';
import ProfessorBag from '../../components/ProfessorBag';
import ContactForm from '../../components/ContactForm';
import JobApplicationForm from '../../components/JobApplicationForm';

const HomePage = ({ params }) => {
  const { lang } = params;
  return (
    <div className={lang === 'ar' ? 'arabic' : ''}>
      <Header lang={lang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <BlogSection lang={lang} />
      <ProfessorBag lang={lang} />
      <ContactForm lang={lang} />
      <JobApplicationForm lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default HomePage;
