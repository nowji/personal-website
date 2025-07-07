import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="w-full md:w-3/4 flex flex-col items-left justify-start p-4 md:p-8">
      <h1 className="text-5xl font-bold">Home</h1>
      <hr className="mt-2 mb-6 w-4/5"></hr>
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p>
        I am a senior at the University of Florida studying computer science. My
        main interests are in front-end engineering and machine learning. In my
        professional experience, I have worked as a software engineering intern
        at The Trade Desk as well as an IT intern and Salesforce developer
        intern at Siemens Energy. On campus, I previously served as a team lead
        at the{" "}
        <a
          className="text-[#1717cf]"
          target="_blank"
          href="https://classics.ufl.edu/data-driven-humanities-research-group/"
        >
          data driven humanities research group
        </a>
        , helped create an administrative dashboard to manage attendance for the
        ACM chapter on campus, and am helping organize the campus hackathon,
        Swamphacks, for 2026.
      </p>
    </div>
  );
};

export default HomePage;
