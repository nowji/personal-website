import React from "react";
import CourseCard from "./CourseCard";
import type { Course } from "../types/Course";

interface CourseContainerProps {
  courseType: string;
  courses: Course[];
}

const CourseContainer: React.FC<CourseContainerProps> = ({
  courseType,
  courses,
}) => {
  return (
    <>
      <h3 className="text-2xl font-semibold">{courseType + " Courses"}</h3>
      <div className="border border-dark-gray-primary m-4 rounded-sm shadow-md grid grid-cols-1 md:grid-cols-3 justify-start content-center">
        {courses.map((course) => (
          <CourseCard key={course.code} course={course}></CourseCard>
        ))}
      </div>
    </>
  );
};

export default CourseContainer;
