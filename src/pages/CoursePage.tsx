import React from "react";
import CourseContainer from "../components/CourseContainer";
import { csCourses, philCourses, aiCourses } from "../data/courses";
import type { Course } from "../types/Course";

const emptyCourse: Course = {
  code: "",
  name: "",
  semester: "",
};

const padCourses = function (courses: Course[]) {
  const padded = [...courses];
  // potential bug: if screen width changes from small to medium, padding doesn't refresh
  if (typeof window !== "undefined") {
    while (padded.length % 3 !== 0 && window.screen.width > 768) {
      padded.push(emptyCourse);
    }
  }
  return padded;
};

const CoursePage: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col items-left justify-start p-4 md:p-8 h-full">
        <h1 className="text-5xl font-bold mb-4">Coursework</h1>
        <hr className="mt-2 mb-6 w-4/5"></hr>

        <div className="w-full justify-evenly flex flex-wrap flex-row gap-6">
          <div className="flex flex-col p-2">
            <h2 className="text-2xl font-bold">Major</h2>
            <ul>
              <li>Computer Science</li>
            </ul>
          </div>
          <div className="flex flex-col p-2">
            <h2 className="text-2xl font-bold">Minor</h2>
            <ul>
              <li>Philosophy</li>
            </ul>
          </div>
          <div className="flex flex-col p-2">
            <h2 className="text-2xl font-bold">Certificates</h2>
            <ul className="list-disc">
              <li>AI Fundamentals</li>
              <li>
                <a
                  href="https://learn.nvidia.com/certificates?id=94e6lWcSTEOp5cOZrm4KSA#"
                  target="_blank"
                  className="text-[#1717cf] block truncate"
                >
                  Nvidia Natural Language Processing
                </a>
              </li>
              <li>
                <a
                  href="https://learn.nvidia.com/certificates?id=imC_2efcSVC50RSRH4CPQQ"
                  target="_blank"
                  className="text-[#1717cf] block truncate"
                >
                  Nvidia Fundamentals of Deep Learning
                </a>
              </li>
            </ul>
          </div>
        </div>

        <CourseContainer
          courseType="Computer Science"
          courses={padCourses(csCourses)}
        ></CourseContainer>
        <CourseContainer
          courseType="AI/ML"
          courses={padCourses(aiCourses)}
        ></CourseContainer>
        <CourseContainer
          courseType="Philosophy"
          courses={padCourses(philCourses)}
        ></CourseContainer>
      </div>
    </>
  );
};

export default CoursePage;
