import React from 'react';
// import AIBanner from '/img/ai-banner.svg';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-900 text-white py-20 flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-opacity-50 bg-black" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Your AI Learning Companion
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-md mx-auto">
          Explore, Learn, and Create with the latest in AI technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#get-started"
            className="bg-white text-blue-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 rounded-lg px-6 py-3"
          >
            Get Started
          </a>
          <a
            href="#join-community"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Join the Community
          </a>
        </div>
      </div>
      {/* Optional Illustration */}
      {/* <div className="mt-10 relative z-10">
        <img src={AIBanner} alt="AI Illustration" className="w-full h-auto max-w-md mx-auto" />
      </div> */}
    </div>
  );
};

export default HeroSection;
