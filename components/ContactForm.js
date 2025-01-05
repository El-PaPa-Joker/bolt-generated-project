import React from 'react';

const ContactForm = ({ lang }) => {
  const contactContent = {
    en: {
      title: 'Contact Us',
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitButton: 'Send Message',
    },
    ar: {
      title: 'تواصل معنا',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      subjectLabel: 'الموضوع',
      messageLabel: 'الرسالة',
      submitButton: 'إرسال الرسالة',
    },
  };

  const currentContent = contactContent[lang] || contactContent.en;

  return (
    <section className="py-16 bg-accentGray">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              {currentContent.subjectLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              {currentContent.messageLabel}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
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

export default ContactForm;
