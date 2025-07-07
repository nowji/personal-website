import React, { useState } from "react";
import experiences from "../data/experiences";
import ExperienceCard from "../components/ExperienceCard";
import type { Experience } from "../types/Experience";

const allExperienceTypes: Experience["type"][] = [
  "research",
  "work",
  "involvement",
];

const ExperiencePage: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<Experience["type"][]>([]);

  const handleCheckboxChange = (type: Experience["type"]) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };

  const filteredExperiences =
    selectedTypes.length === 0
      ? experiences
      : experiences.filter((exp) => selectedTypes.includes(exp.type));

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-5xl font-bold mb-4">Experience</h1>
      <hr className="mt-2 mb-6 w-4/5"></hr>

      <div className="mb-8 flex flex-wrap gap-4 items-center">
        {allExperienceTypes.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
              className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-lg capitalize">{type}</span>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-600 md:col-span-2">
            No experiences match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;
