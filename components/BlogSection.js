import React from 'react';

const BlogSection = ({ lang }) => {
  const blogContent = {
    en: {
      title: 'Latest Blog Posts',
      posts: [
        { title: 'The Future of Digital Marketing', excerpt: 'An overview of the latest trends in digital marketing.' },
        { title: 'SEO Best Practices', excerpt: 'Tips and tricks for improving your search engine ranking.' },
        { title: 'Social Media Strategies', excerpt: 'Effective strategies for social media marketing.' },
      ],
    },
    ar: {
      title: 'أحدث المقالات',
      posts: [
        { title: 'مستقبل التسويق الرقمي', excerpt: 'نظرة عامة على أحدث الاتجاهات في التسويق الرقمي.' },
        { title: 'أفضل ممارسات تحسين محركات البحث', excerpt: 'نصائح وحيل لتحسين ترتيب محرك البحث الخاص بك.' },
        { title: 'استراتيجيات وسائل التواصل الاجتماعي', excerpt: 'استراتيجيات فعالة للتسويق عبر وسائل التواصل الاجتماعي.' },
      ],
    },
  };

  const currentContent = blogContent[lang] || blogContent.en;

  return (
    <section className="py-16 bg-accentGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primaryBlue mb-8 text-center">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-primaryGreen mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
