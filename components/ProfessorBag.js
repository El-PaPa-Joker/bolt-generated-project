import React from 'react';

const ProfessorBag = ({ lang }) => {
  const professorBagContent = {
    en: {
      title: 'Professor Bag',
      resources: [
        { title: 'Digital Marketing Guide', type: 'pdf', link: '#' },
        { title: 'SEO Checklist', type: 'pdf', link: '#' },
        { title: 'Social Media Tips', type: 'video', link: '#' },
      ],
    },
    ar: {
      title: 'حقيبة الأستاذ',
      resources: [
        { title: 'دليل التسويق الرقمي', type: 'pdf', link: '#' },
        { title: 'قائمة مراجعة تحسين محركات البحث', type: 'pdf', link: '#' },
        { title: 'نصائح وسائل التواصل الاجتماعي', type: 'video', link: '#' },
      ],
    },
  };

  const currentContent = professorBagContent[lang] || professorBagContent.en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primaryBlue mb-8 text-center">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-primaryGreen mb-2">{resource.title}</h3>
              <p className="text-gray-700">
                {resource.type === 'pdf' ? 'PDF Document' : 'Video Resource'}
              </p>
              <a href={resource.link} className="bg-primaryGreen text-white py-2 px-4 rounded mt-4 inline-block">
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessorBag;
