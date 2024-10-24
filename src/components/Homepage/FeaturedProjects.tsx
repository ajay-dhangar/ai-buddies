import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot that uses NLP to engage in human-like conversations.",
    imageUrl: "/images/chatbot.jpg", // Replace with your actual image paths
    projectLink: "#"
  },
  {
    title: "Image Recognition App",
    description: "A deep learning model for real-time image classification and object detection.",
    imageUrl: "/images/image-recognition.jpg",
    projectLink: "#"
  },
  {
    title: "Voice Assistant",
    description: "A voice-controlled AI assistant that integrates with smart devices.",
    imageUrl: "/images/voice-assistant.jpg",
    projectLink: "#"
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
          Explore some of our featured projects built by the AIBuddies community.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.projectLink} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
