export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }
  