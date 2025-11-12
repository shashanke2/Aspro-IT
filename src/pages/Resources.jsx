import React from "react";
import Header from "../components/Header";
import bg from "../assets/homeBg.jpg";

export default function Resources() {
  const courses = [
    "Python for Beginners",
    "Generative AI Essentials",
    "Cybersecurity Fundamentals",
    "Full Stack Development",
    "Data Science with Python", 
  ];

  const handleDownload = (course) => {
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", fontFamily: "Poppins, sans-serif" }}>
      <Header />

      <div
        style={{
          width: "1440px",
          minHeight: "700px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "120px",
          marginBottom: "40px",
          gap: "30px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            position: "relative",
            fontSize: "48px",
            fontWeight: 600,
            color: "#FFFFFF",
            marginTop: "20px",
            marginBottom: 0,
          }}
        >
          Download Notes
        </h1>

        {/* Course List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "80%" }}>
          {courses.map((course) => (
            <div
              key={course}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "16px 24px",
                backdropFilter: "blur(6px)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: 500 }}>{course}</span>

              <button
                onClick={() => handleDownload(course)}
                style={{
                  width: "180px",
                  height: "45px",
                  borderRadius: "25px",
                  border: "none",
                  background: "#00A8FF",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0090DD")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#00A8FF")}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
