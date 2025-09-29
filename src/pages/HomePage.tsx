import React from "react";
import headshot from "../assets/headshot.jpg";

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-left justify-start p-4 md:p-8 h-full">
      <h1 className="text-5xl font-bold">Home</h1>
      <hr className="mt-2 mb-6 w-4/5"></hr>
      <div>
        <img src={headshot} width="30%" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <h3 className="italic text-xl mb-4">
        "Our intelligence is what makes us human, and AI is an extension of that
        quality" - Yann LeCun
      </h3>
      <p>
        I am a senior at the University of Florida studying computer science. My
        main interests are in front-end engineering, full stack engineering and
        machine learning. In my professional experience, I have worked as a
        software engineering intern at The Trade Desk as well as an IT intern at
        Siemens Energy. Currently, I'm conducting research on empathy and LLM's
        under Dr. Cameron Buckner, a web developer at{" "}
        <a
          className="text-[#1717cf]"
          target="_blank"
          href="https://theagency.jou.ufl.edu/"
        >
          The Agency
        </a>{" "}
        (an advertising firm in the college of journalism), and on the
        operations committee for SwampHacks XI, the flagship hackathon at UF.
        Previously I've served as a team lead at the{" "}
        <a
          className="text-[#1717cf]"
          target="_blank"
          href="https://classics.ufl.edu/data-driven-humanities-research-group/"
        >
          data driven humanities research group
        </a>
        , helped create an administrative dashboard to manage attendance for the
        ACM chapter on campus, and worked at the UFIT help desk.
      </p>
    </div>
  );
};

export default HomePage;
