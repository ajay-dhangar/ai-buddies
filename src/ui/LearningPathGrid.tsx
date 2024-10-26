import React from 'react';
import { LearningPath } from '../types/LearningPath';
import LearningPathCard from './LearningPathCard';

interface LearningPathGridProps {
  paths: LearningPath[];
}

const LearningPathGrid: React.FC<LearningPathGridProps> = ({ paths }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paths.map((path, index) => (
        <LearningPathCard key={index} path={path} />
      ))}
    </div>
  );
};

export default LearningPathGrid;