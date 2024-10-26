import React from "react";
import Layout from "@theme/Layout";
import Mermaid from "@theme/Mermaid";
import Header from "../../ui/Header";

const IntermediateLearningPath: React.FC = () => {
  return (
    <Layout
      title="Intermediate Learning Path"
      description="Dive deeper into AI concepts with our curated intermediate learning path."
    >
      <div className="container p-6 dark:bg-gray-900 min-h-screen">
        <Header title="Intermediate Learning Path" />
        <p className="mx-auto text-base sm:text-xl leading-relaxed animate-fade-in delay-150 my-4 text-center">
          Ready to take your AI skills to the next level? This intermediate
          learning path covers more advanced topics like NLP, computer vision,
          and AI projects to help you grow your expertise.
        </p>

        <div className="flex justify-center my-6 animate-fade-in delay-300">
          <Mermaid
            value={`
            %% Intermediate Learning Path Graph
            graph TD;
            style A stroke:#333,stroke-width:2px;
            style B stroke:#333,stroke-width:2px;
            style C stroke:#333,stroke-width:2px;
            style D stroke:#333,stroke-width:2px;
            style E stroke:#333,stroke-width:2px;
            style F stroke:#333,stroke-width:2px;
            style G stroke:#333,stroke-width:2px;

            A[📘 Recap of Basic AI Concepts] --> B[📂 Data Preprocessing & Feature Engineering];
            B --> C[🧮 Advanced Linear Algebra & Probability];
            C --> D[🤖 Deep Dive into Machine Learning Algorithms];
            D --> E[🌐 Natural Language Processing Basics];
            E --> F[🖼️ Computer Vision Basics];
            F --> G[🧪 Intermediate AI Projects];

            %% Adding some extra styling
            classDef default stroke:#000,stroke-width:1px;
            linkStyle default stroke:#007acc,stroke-width:2px,fill:none;
          `}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 1: Recap of Basic AI Concepts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Review the basic AI concepts you learned in the beginner path to
              prepare for more advanced topics in this learning path.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 2: Data Preprocessing & Feature Engineering
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn how to clean and preprocess data, and create new features
              that improve the performance of your machine learning models.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 3: Advanced Linear Algebra & Probability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dive deeper into linear algebra and probability theory to
              understand the mathematical foundations of machine learning
              algorithms.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 4: Deep Dive into Machine Learning Algorithms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore advanced machine learning algorithms like decision trees,
              random forests, and gradient boosting to improve your model
              performance.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 5: Natural Language Processing Basics
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn the fundamentals of natural language processing (NLP) to
              process and analyze human language data using machine learning
              techniques.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 6: Computer Vision Basics
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Explore the basics of computer vision to understand how machines
              can interpret and analyze visual information from the world around
              us.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Step 7: Intermediate AI Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Apply your knowledge to more challenging AI projects like
              sentiment analysis, image classification, or chatbot development
              to build real-world AI applications
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IntermediateLearningPath;
