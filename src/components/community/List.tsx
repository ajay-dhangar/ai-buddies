import React from 'react';
import Card from './Card';

const communityData = [
  {
    title: 'AI Workshop: Introduction to Machine Learning',
    description: 'Join us for an interactive workshop on machine learning fundamentals.',
    date: 'October 30, 2024',
    link: '#',
  },
  {
    title: 'AI Ethics Discussion Forum',
    description: 'A forum to discuss the ethical implications of AI technologies.',
    date: 'November 5, 2024',
    link: '#',
  },
  {
    title: 'Showcase: Community AI Projects',
    description: 'Explore innovative AI projects developed by our community members.',
    date: 'November 15, 2024',
    link: '#',
  },
];

const List: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {communityData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          date={item.date}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default List;
