import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div
      className="relative py-20 bg-white dark:bg-gray-800 text-gray-300 overflow-hidden"
      style={{
        backgroundImage: `url('/img/ai-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-25" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About AIBuddies</h2>
        <p className="text-lg md:text-xl mb-6">
          AIBuddies is your go-to platform for mastering Artificial Intelligence through interactive learning and real-world projects.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Our mission is to create a welcoming and engaging community where users can explore AI concepts, collaborate on real-world projects, and stay updated on cutting-edge advancements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <FeatureCard
            emoji="🧑‍🏫"
            title="Structured Learning Paths"
            description="For different levels, from AI fundamentals to advanced research topics."
          />
          <FeatureCard
            emoji="🛠️"
            title="Hands-On Projects"
            description="Allow users to apply AI concepts to real-world problems."
          />
          <FeatureCard
            emoji="🌐"
            title="Interactive AI Demos"
            description="Visualize concepts and experiment with algorithms."
          />
          <FeatureCard
            emoji="🤝"
            title="Community-Driven Learning"
            description="Forums, study groups, and collaborative projects."
          />
          <FeatureCard
            emoji="📈"
            title="Cutting-Edge Trends"
            description="Stay informed with the latest in AI technologies."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ emoji: string; title: string; description: string }> = ({ emoji, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 text-gray-800 dark:text-gray-300">
      <h3 className="text-2xl font-semibold mb-2">{emoji} {title}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default AboutSection;
