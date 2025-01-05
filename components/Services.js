import React from 'react';

const Services = ({ lang }) => {
  const servicesContent = {
    en: {
      title: 'Our Services',
      services: [
        { title: 'Digital Marketing', description: 'Comprehensive digital marketing solutions.' },
        { title: 'SEO', description: 'Search engine optimization to improve visibility.' },
        { title: 'Social Media', description: 'Social media management and marketing.' },
      ],
    },
    ar: {
      title: 'خدماتنا',
      services: [
        { title: 'التسويق الرقمي', description: 'حلول تسويق رقمي شاملة.' },
        { title: 'تحسين محركات البحث', description: 'تحسين محركات البحث لزيادة الرؤية.' },
        { title: 'وسائل التواصل الاجتماعي', description: 'إدارة وتسويق وسائل التواصل الاجتماعي.' },
      ],
    },
  };

  const currentContent = servicesContent[lang] || servicesContent.en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primaryBlue mb-8 text-center">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-primaryGreen mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
