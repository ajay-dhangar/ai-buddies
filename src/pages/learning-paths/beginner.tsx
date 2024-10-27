import React from "react";
import Layout from "@theme/Layout";
import Mermaid from "@theme/Mermaid";
import Header from "../../ui/Header";

const BeginnerLearningPath: React.FC = () => {
  return (
    <Layout
      title="Beginner AI Learning Path"
      description="Start your AI journey with foundational concepts and basic projects."
    >
      <div className="container p-6 dark:bg-gray-900 min-h-screen">
        <Header title="Beginner AI Learning Path" />
        <p className="mx-auto text-base sm:text-xl leading-relaxed animate-fade-in delay-150 my-4 text-center">
          This learning path is designed for those who are new to AI and want to
          build a strong foundation in the fundamentals. Follow the steps below
          to get started on your journey.
        </p>

        <div className="my-6 text-center">
          <Mermaid
            value={`
            %% Beginner Learning Path Mind Map
            mindmap
              root((📘 AI Learning Path))
                A[🐍 Basic Python Programming]
                B[📊 Linear Algebra & Calculus Basics]
                C[🤖 Introduction to Machine Learning]
                D[📈 Basic ML Projects]
                E[🧠 Introduction to Neural Networks]
                F[🚀 Simple AI Applications]
          `}
          />
        </div>

        {/* Content or Learning Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 1: Introduction to AI
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn what AI is, its history, and its various applications.
              Understand why AI is a key technology of the future.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 2: Basic Python Programming
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get familiar with Python programming, a popular language in AI
              development. Learn the syntax, data types, and basic libraries.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 3: Linear Algebra & Calculus Basics
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn essential math topics like linear algebra and calculus that
              are used in machine learning algorithms.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 4: Introduction to Machine Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get a basic understanding of machine learning concepts, including
              supervised, unsupervised, and reinforcement learning.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 5: Basic ML Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Start working on simple machine learning projects like predicting
              house prices or classifying images to reinforce your learning.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 6: Introduction to Neural Networks
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn the basics of neural networks and deep learning, the
              technologies behind modern AI breakthroughs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 7: Simple AI Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Develop basic AI applications like chatbots or recommendation
              systems to understand how AI is applied in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BeginnerLearningPath;
