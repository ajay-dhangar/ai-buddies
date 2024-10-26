import React from 'react';

const OurMission: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Our Mission
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At AIBuddies, our mission is to make AI learning accessible and engaging for everyone.
          We aim to bridge the gap between beginners and experts by providing comprehensive resources,
          hands-on projects, and a collaborative community to foster growth in AI.
        </p>
      </div>
    </section>
  );
};

export default OurMission;