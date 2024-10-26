import React from 'react';
import { LearningPath } from '../types/LearningPath';
import Link from '@docusaurus/Link';

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({ path }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6 transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {path.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{path.description}</p>
      <Link
        to={path.link}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 hover:shadow-md hover:text-white"
      >
        Explore
      </Link>
    </div>
  );
};

export default LearningPathCard;