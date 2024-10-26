import Link from '@docusaurus/Link';
import React from 'react';

interface CommunityCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

const Card: React.FC<CommunityCardProps> = ({ title, description, date, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      <span className="text-gray-500 dark:text-gray-500 text-sm">{date}</span>
      <div className="mt-4">
        <Link
          to={link}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
