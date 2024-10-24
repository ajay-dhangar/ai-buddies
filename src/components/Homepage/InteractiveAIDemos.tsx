import Link from '@docusaurus/Link';
import React from 'react';

interface DemoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoLink: string;
}

const demoData: DemoCardProps[] = [
  {
    title: 'Chatbot Interaction',
    description: 'Interact with an AI-powered chatbot to get instant responses.',
    imageUrl: '/images/chatbot.jpg',
    demoLink: '#', // '/demos/chatbot-interaction',
  },
  {
    title: 'Text-to-Speech Synthesis',
    description: 'Convert text to realistic speech using AI technology.',
    imageUrl: '/images/text-to-speech.jpg',
    demoLink: '#', // '/demos/text-to-speech',
  },
  {
    title: 'Style Transfer',
    description: 'Apply artistic styles to your photos using neural networks.',
    imageUrl: '/images/style-transfer.jpg',
    demoLink: '#', // '/demos/style-transfer',
  },
];

const DemoCard: React.FC<DemoCardProps> = ({ title, description, imageUrl, demoLink }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          to={demoLink}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Try Demo
        </Link>
      </div>
    </div>
  );
};

const InteractiveAIDemos: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-800">
          Interactive AI Demos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Explore our AI demos and see the latest advancements in artificial intelligence through hands-on interactive experiences.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {demoData.map((demo, index) => (
            <DemoCard
              key={index}
              title={demo.title}
              description={demo.description}
              imageUrl={demo.imageUrl}
              demoLink={demo.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIDemos;
