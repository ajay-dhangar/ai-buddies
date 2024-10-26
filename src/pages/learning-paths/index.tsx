import React from "react";
import Layout from "@theme/Layout";
import Header from "../../ui/Header";
import LearningPathGrid from "../../ui/LearningPathGrid";
import { LearningPath } from "../../types/LearningPath";

const learningPaths: LearningPath[] = [
  {
    title: "Beginner AI Learning Path",
    description:
      "Start your AI journey with foundational concepts and basic projects.",
    link: "/learning-paths/beginner",
  },
  {
    title: "Intermediate AI Learning Path",
    description:
      "Expand your skills with more challenging topics like NLP and computer vision.",
    link: "/learning-paths/intermediate",
  },
  {
    title: "Advanced AI Learning Path",
    description:
      "Master advanced topics like deep learning, reinforcement learning, and generative AI.",
    link: "/learning-paths/advanced",
  },
];

const LearningPaths: React.FC = () => {
  return (
    <Layout
      title="Learning Paths"
      description="Explore our curated learning paths to help you master AI concepts and technologies."
    >
      <div className="bg-gray-100 dark:bg-gray-900 p-6">
        <Header title="Learning Paths" />
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
          Explore our curated learning paths to help you master AI concepts and
          technologies. Each path includes a collection of tutorials, projects,
          and resources to guide you through your learning journey.
        </p>
        <LearningPathGrid paths={learningPaths} />
      </div>
    </Layout>
  );
};

export default LearningPaths;
