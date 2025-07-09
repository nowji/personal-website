// src/components/ExperienceCard.tsx
import React from "react";
import type { Experience } from "../types/Experience"; // Adjust path if needed

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-true-white border border-dark-gray-primary px-6 pb-4 pt-2 rounded-lg shadow-md flex flex-col md:flex-row items-start space-y-4">
      {experience.imagePath && (
        <div className="flex-shrink-0">
          <img
            src={experience.imagePath}
            className="w-16 h-16 object-contain rounded-full border border-gray-200 p-1"
          />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-true-black mb-1">
          {experience.position}
        </h3>
        <p className="text-dark-gray-secondary mb-1">{experience.company}</p>
        <p className="text-dark-gray-secondary mb-2">
          {experience.startDate} - {experience.endDate || "Present"}
        </p>
        <ul className="list-disc list-inside text-dark-gray-primary space-y-1">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
