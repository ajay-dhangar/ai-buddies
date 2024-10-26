import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center mb-10">
      {/* <img
        src="/img/logo.jpg"
        alt="AIBuddies Logo"
        className="h-16 w-16 rounded mr-4 animate-fade-in"
      /> */}
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl leading-tight tracking-wide animate-fade-in">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            {title.split(" ")[0]}
          </span>
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 ml-4">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h1>
    </div>
  );
};

export default Header;
