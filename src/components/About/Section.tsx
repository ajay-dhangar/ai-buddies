import React from 'react';
import Card from './Card';
import Header from '../../ui/Header';
import { FaLaptopCode, FaRobot, FaBrain } from 'react-icons/fa';

const Section: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4">
        <Header title="About AIBuddies" />

        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
          AIBuddies is your go-to resource for AI projects and learning paths.
          Our platform offers a wide range of projects and tutorials to help you
          learn AI concepts and technologies. Whether you're a beginner or an
          expert, we have something for everyone!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="AI Learning"
            description="Explore AI concepts with our structured learning paths, tailored for beginners to experts."
            icon={<FaLaptopCode />}
          />
          <Card
            title="Hands-On Projects"
            description="Engage with real-world AI projects that help you apply concepts and build practical skills."
            icon={<FaRobot />}
          />
          <Card
            title="Cutting-Edge Trends"
            description="Stay up-to-date with the latest advancements in AI, including deep learning, NLP, and more."
            icon={<FaBrain />}
          />
        </div>      
      </div>
    </section>
  );
};

export default Section;
