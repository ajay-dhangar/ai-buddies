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
      <div className="container dark:bg-gray-900">
        <Header title="Intermediate Learning Path" />
        <p className="mx-auto text-base sm:text-xl leading-relaxed animate-fade-in delay-150 my-4 text-center">
          Ready to take your AI skills to the next level? This intermediate
          learning path covers more advanced topics like NLP, computer vision,
          and AI projects to help you grow your expertise.
        </p>

        <div className="my-6 text-center">
          <Mermaid
            value={`
            %% Intermediate Learning Path Sequence Diagram
            sequenceDiagram
                participant User as Learner
                participant A as AI Basics Review
                participant B as Data Preprocessing & Feature Engineering
                participant C as Advanced Linear Algebra & Probability
                participant D as Deep Learning Algorithms
                participant E as NLP Basics
                participant F as Computer Vision Basics
                participant G as Intermediate Projects

                User->>A: Starts with a review of AI basics
                A->>B: Moves on to Data Preprocessing
                B->>C: Learns Advanced Math
                C->>D: Understands Deep Learning Algorithms
                D->>E: Gets introduced to NLP
                E->>F: Studies Computer Vision
                F->>G: Completes Intermediate Projects
                G-->>User: Gains Intermediate AI skills
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
