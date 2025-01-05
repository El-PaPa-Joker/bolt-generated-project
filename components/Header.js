import Link from 'next/link';
import React from 'react';

const Header = ({ lang }) => {
  const navItems = {
    en: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    ar: [
      { label: 'الرئيسية', href: '/ar' },
      { label: 'الخدمات', href: '/ar/services' },
      { label: 'دراسات الحالة', href: '/ar/case-studies' },
      { label: 'الوظائف', href: '/ar/jobs' },
      { label: 'المدونة', href: '/ar/blog' },
      { label: 'تواصل معنا', href: '/ar/contact' },
    ],
  };

  const currentNavItems = navItems[lang] || navItems.en;

  return (
    <header className="bg-accentWhite shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={lang === 'ar' ? '/ar' : '/'} className="text-2xl font-bold text-primaryBlue">
          ROI Speaks
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {currentNavItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-gray-700 hover:text-primaryGreen">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
