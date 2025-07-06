import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Hello, I'm Neema</h1>

      <p className="text-xl text-center mb-8">
        A student building things with code.
      </p>

      <nav className="flex space-x-4">
        <a
          href="/about"
          className="text-#262626 px-6 py-3 bg-true-white text-true-black rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          Learn More About Me
        </a>
        <a
          href="/projects"
          className="px-6 py-3 bg-true-white text-true-black rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          View My Projects
        </a>
      </nav>

      <footer className="mt-16 text-sm text-center">
        © {new Date().getFullYear()} Neema. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
