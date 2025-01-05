import React from 'react';

const Footer = ({ lang }) => {
  const footerContent = {
    en: {
      socialLinks: [
        { icon: 'facebook', href: '#' },
        { icon: 'twitter', href: '#' },
        { icon: 'linkedin', href: '#' },
      ],
      newsletter: 'Subscribe to our newsletter',
      contactInfo: 'Contact us at info@roispeaks.com',
    },
    ar: {
      socialLinks: [
        { icon: 'facebook', href: '#' },
        { icon: 'twitter', href: '#' },
        { icon: 'linkedin', href: '#' },
      ],
      newsletter: 'اشترك في قائمتنا البريدية',
      contactInfo: 'تواصل معنا عبر info@roispeaks.com',
    },
  };

  const currentContent = footerContent[lang] || footerContent.en;

  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600">{currentContent.newsletter}</p>
          <input type="email" placeholder="Your email" className="mt-2 p-2 border rounded" />
          <button className="bg-primaryGreen text-white p-2 rounded ml-2">Subscribe</button>
        </div>
        <div>
          <p className="text-gray-600">{currentContent.contactInfo}</p>
          <div className="flex space-x-4 mt-2">
            {currentContent.socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-600 hover:text-primaryGreen">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
