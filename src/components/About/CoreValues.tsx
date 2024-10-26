import React from 'react';
import Card from './Card';
import { FaGlobe, FaHandshake, FaLightbulb } from 'react-icons/fa';

const CoreValues: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Inclusivity"
            description="We believe in providing accessible AI learning resources for everyone, regardless of background."
            icon={<FaGlobe />}
          />
          <Card
            title="Collaboration"
            description="We foster a community of learners and experts who share knowledge and grow together."
            icon={<FaHandshake />}
          />
          <Card
            title="Innovation"
            description="We encourage creative problem-solving and embracing cutting-edge technology to push the boundaries of AI."
            icon={<FaLightbulb />}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;