import React from "react";
import type { Course } from "../types/Course"; // Adjust path if needed

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="border border-dark-gray-primary p-2 flex flex-col md:flex-row items-start">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-true-black mb-1">
          {course.name}
        </h3>
        <h4 className="text-lg text-dark-gray-secondary mb-2">{course.code}</h4>
        <h5 className="text-dark-gray-secondary mb-1 italic">
          {course.semester}
        </h5>
      </div>
    </div>
  );
};

export default CourseCard;
