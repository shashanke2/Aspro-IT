import React from "react";
import CourseInfo from "../components/courses/CourseInfo";
import CourseHeader from "../components/courses/CourseHeader";
import CourseModule from "../components/courses/CourseModule";
import CourseFooter from "../components/courses/CourseFooter";
import { courses } from "../components/courses/CourseData";
import { useParams } from "react-router-dom";

const slugify = (title) =>
  title.trim().toLowerCase().replace(/\s+/g, "-");

export default function CourseDetails() {
  const { courseSlug } = useParams();

  const course = courses.find((c) => slugify(c.title) === courseSlug);

  if (!course) {
    return (
      <div
        style={{
          color: "#fff",
          background: "#000",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2>Course not found for "{courseSlug}" 😢</h2>
      </div>
    );
  }

  return (
    <div>
      <CourseHeader />
      <CourseInfo course={course} />
      <CourseModule
        skills={course.skills}
        modules={course.modules}
        faqs={course.faqs}
      />
      <CourseFooter />
    </div>
  );
}
