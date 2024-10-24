import Link from '@docusaurus/Link';
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
  author: string;
}

const blogData: BlogCardProps[] = [
  {
    title: 'Exploring AI Ethics: Key Considerations',
    description: 'A deep dive into the ethical challenges and considerations when developing AI systems.',
    imageUrl: '/images/ai-ethics.jpg',
    link: '#', // '/blog/ai-ethics',
    date: 'Oct 20, 2024',
    author: 'John Doe',
  },
  {
    title: 'Top 10 AI Tools for Developers in 2024',
    description: 'An overview of the most powerful AI tools that every developer should know.',
    imageUrl: '/images/ai-tools.jpg',
    link: '#', // '/blog/ai-tools',
    date: 'Oct 15, 2024',
    author: 'Jane Smith',
  },
  {
    title: 'Understanding Machine Learning Algorithms',
    description: 'An introduction to the most common machine learning algorithms and their applications.',
    imageUrl: '/images/ml-algorithms.jpg',
    link: '/blog/ml-algorithms',
    date: 'Oct 10, 2024',
    author: 'Alice Johnson',
  },
];

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, link, date, author }) => {
  return (
    <Link
      to={link}
      className="relative group block rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-2 dark:text-white text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
      </div>
    </Link>
  );
};

const BlogAndResources: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-800">
          Blog and Resources
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Stay informed with the latest AI insights, tutorials, and news from our blog.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
              date={item.date}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAndResources;
