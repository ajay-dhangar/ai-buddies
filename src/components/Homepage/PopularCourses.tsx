import React from 'react';
import Link from '@docusaurus/Link';

interface Course {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const courses: Course[] = [
  {
    title: 'Machine Learning Basics',
    description: 'Get started with Machine Learning with foundational concepts and hands-on projects.',
    imageUrl: '/images/ml-basics.jpg', // Replace with your actual image paths
    link: '#',
  },
  {
    title: 'Deep Learning with Python',
    description: 'Learn deep learning techniques and build neural networks using Python and TensorFlow.',
    imageUrl: '/images/deep-learning.jpg',
    link: '#',
  },
  {
    title: 'AI in Computer Vision',
    description: 'Explore the world of Computer Vision and build AI models for image recognition using AI and OpenCV.',
    imageUrl: '/images/computer-vision.jpg',
    link: '#',
  },
];

const PopularCourses: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Explore our most popular courses to get started on your AI learning journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block bg-blue-600 text-white dark:bg-blue-500 dark:text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;