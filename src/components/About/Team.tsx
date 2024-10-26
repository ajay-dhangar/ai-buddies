import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Founder & CEO', imageUrl: 'https://github.com/ajay-dhangar.png' },
  { name: 'Jane Smith', role: 'Lead Developer', imageUrl: 'https://github.com/ajay-dhangar.png' },
  { name: 'Mike Johnson', role: 'AI Specialist', imageUrl: 'https://github.com/ajay-dhangar.png' },
];

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
