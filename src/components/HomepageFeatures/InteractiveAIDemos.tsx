const InteractiveAIDemos = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-10">
        <h2 className="text-3xl font-bold mb-4">Interactive AI Demos</h2>
        <p className="mb-4">Experiment with our AI demos to visualize concepts and algorithms.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Demo 1: Neural Network Visualizer</h3>
            <p>Visualize how neural networks learn and make decisions.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Try Now</button>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Demo 2: Image Recognition</h3>
            <p>Test our image recognition model with your own images.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Try Now</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default InteractiveAIDemos;
  