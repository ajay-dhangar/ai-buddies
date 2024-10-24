import React from 'react';

const courses = [
  {
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and start building your own models.',
    imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    link: '#',
  },
  {
    title: 'Deep Learning for Beginners',
    description: 'Dive into deep learning techniques and understand how to create neural networks.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Natural Language Processing',
    description: 'Explore how to process and analyze human language data using NLP techniques.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'AI Ethics and Society',
    description: 'Understand the ethical implications of AI and its impact on society.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const PopularCourses: React.FC = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
        <p className="text-lg md:text-xl mb-6">
          Explore our most popular courses designed to elevate your AI skills.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg m-4 p-5 max-w-xs">
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 rounded-md mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="mb-4">{course.description}</p>
            <a
              href={course.link}
              className="block text-center bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Enroll Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
