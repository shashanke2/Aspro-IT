import { Link } from "react-router-dom";

export default function CoursesList({ courses }) {
  const slugify = (title) => title.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      {courses.map((course) => (
        <Link
          key={course.title}
          to={`/courses/${slugify(course.title)}`}
          state={{ course }} 
          style={{ display: "block", marginBottom: "12px", color: "#fff" }}
        >
          {course.title}
        </Link>
      ))}
    </div>
  );
}
