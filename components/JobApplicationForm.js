import React from 'react';

const JobApplicationForm = ({ lang }) => {
  const jobContent = {
    en: {
      title: 'Job Application',
      nameLabel: 'Name',
      emailLabel: 'Email',
      positionLabel: 'Position',
      cvLabel: 'Upload CV',
      submitButton: 'Submit Application',
    },
    ar: {
      title: 'طلب التوظيف',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      positionLabel: 'الوظيفة',
      cvLabel: 'تحميل السيرة الذاتية',
      submitButton: 'إرسال الطلب',
    },
  };

  const currentContent = jobContent[lang] || jobContent.en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primaryBlue mb-8 text-center">{currentContent.title}</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              {currentContent.nameLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {currentContent.emailLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
              {currentContent.positionLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="position"
              type="text"
              placeholder="Desired Position"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
              {currentContent.cvLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cv"
              type="file"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primaryGreen hover:bg-primaryBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {currentContent.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobApplicationForm;
