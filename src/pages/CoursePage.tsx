import React from "react";
import CourseCard from "../components/CourseCard";
import CourseContainer from "../components/CourseContainer";
import { csCourses, philCourses, aiCourses } from "../data/courses";

const CoursePage: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-3/4 p-4 md:p-8 flex flex-col items-left justify-start">
        <h1 className="text-5xl font-bold mb-4">Coursework</h1>
        <hr className="mt-2 mb-6 w-4/5"></hr>

        <div className="w-full justify-evenly flex flex-row gap-6">
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
                  className="text-[#1717cf]"
                >
                  Nvidia Natural Language Processing
                </a>
              </li>
              <li>
                <a
                  href="https://learn.nvidia.com/certificates?id=imC_2efcSVC50RSRH4CPQQ"
                  target="_blank"
                  className="text-[#1717cf]"
                >
                  Nvidia Fundamentals of Deep Learning
                </a>
              </li>
            </ul>
          </div>
        </div>

        <CourseContainer
          courseType="Computer Science"
          courses={csCourses}
        ></CourseContainer>
        <CourseContainer
          courseType="AI/ML"
          courses={aiCourses}
        ></CourseContainer>
        <CourseContainer
          courseType="Philosophy"
          courses={philCourses}
        ></CourseContainer>
      </div>
    </>
  );
};

export default CoursePage;
