import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <div className="text-3xl text-blue-500 dark:text-blue-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;
