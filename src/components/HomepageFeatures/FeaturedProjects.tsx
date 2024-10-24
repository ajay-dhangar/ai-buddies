const FeaturedProjects = () => {
    const projects = [
      { title: "AI Chatbot", description: "A chatbot that understands natural language.", link: "#" },
      { title: "Image Classifier", description: "Classify images using a deep learning model.", link: "#" },
      { title: "Sentiment Analysis Tool", description: "Analyze sentiments from user reviews.", link: "#" },
    ];
  
    return (
      <section className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-10">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProjects;
  