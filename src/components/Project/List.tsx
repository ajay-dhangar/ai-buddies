import React from 'react';
import { Project } from '../../types/Project';
import ProjectCard from './Card';

interface ProjectListProps {
  projects: Project[];
}

const List: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default List;