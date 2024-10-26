import Link from '@docusaurus/Link';
import React from 'react';

interface EngagementCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const engagementData: EngagementCardProps[] = [
  {
    title: 'Forums & Discussions',
    description: 'Join the conversation and connect with other AI enthusiasts in our vibrant community forums.',
    icon: '💬',
    link: '#', // /community/forums
  },
  {
    title: 'AI Study Groups',
    description: 'Participate in study groups to learn collaboratively and explore AI concepts in depth.',
    icon: '📚',
    link: '#', // /community/study-groups
  },
  {
    title: 'AI Events & Webinars',
    description: 'Attend AI-focused events, workshops, and webinars hosted by experts in the field.',
    icon: '🎉',
    link: '#', // /community/events
  },
  {
    title: 'Open Source Con...',
    description: 'Contribute to open-source projects and help improve AI tools and libraries.',
    icon: '🚀',
    link: '#', // /community/open-source
  },
];

const EngagementCard: React.FC<EngagementCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link
      to={link}
      className="relative group block p-6 rounded-lg overflow-hidden border border-transparent transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg transform hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2 dark:text-white text-gray-800 mt-2 mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

const CommunityEngagement: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 dark:text-white text-gray-800">
          Community Engagement
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Get involved with our community and connect with others who share your passion for AI.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementData.map((item, index) => (
            <EngagementCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
