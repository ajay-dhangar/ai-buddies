import React from "react";
import Layout from "@theme/Layout";
import ProjectList from "../../components/Project/List";
import { Project } from "../../types/Project";
import Header from "../../ui/Header";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Beginner AI Project",
    description: "Learn the basics of AI with this beginner-friendly project.",
    imageUrl: "https://www.nomidl.com/wp-content/uploads/2023/07/aiaia.png",
    tags: ["AI", "Machine Learning"],
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Intermediate NLP Project",
    description: "Build a text classification model using NLP techniques.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsfb36KgQOrHtjhz6Sw2pB4ho5YE2mnTKDA&s",
    tags: ["NLP", "Text Classification"],
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Advanced Computer Vision Project",
    description: "Implement an object detection system using deep learning.",
    imageUrl:
      "https://dezyre.gumlet.io/images/blog/computer-vision-projects/Computer_Vision_Projects_ideas.webp?w=376&dpr=2.6",
    tags: ["Computer Vision", "Deep Learning"],
    difficulty: "Advanced",
  },
];

const Projects: React.FC = () => {
  return (
    <Layout
      title="Projects"
      description="Explore our collection of AI projects for all skill levels."
    >
      <div className="container mx-auto px-4 py-8">
        <Header title="AI Projects" />
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
          Explore our collection of AI projects for all skill levels. Our
          projects cover a wide range of topics, including machine learning,
          natural language processing, and computer vision.
        </p>
        <ProjectList projects={projectsData} />
      </div>
    </Layout>
  );
};

export default Projects;
