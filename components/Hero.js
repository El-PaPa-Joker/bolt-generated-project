import React from 'react';

const Hero = ({ lang }) => {
  const heroContent = {
    en: {
      slogan: 'We become one organization as soon as we start collaborating',
      buttonText: 'Read More',
    },
    ar: {
      slogan: 'نصبح منظمة واحدة بمجرد أن نبدأ التعاون',
      buttonText: 'اقرأ المزيد',
    },
  };

  const currentContent = heroContent[lang] || heroContent.en;

  return (
    <section className="bg-accentGray py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primaryBlue mb-6">{currentContent.slogan}</h1>
        <button className="bg-primaryGreen text-white py-3 px-6 rounded hover:bg-primaryBlue">
          {currentContent.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
