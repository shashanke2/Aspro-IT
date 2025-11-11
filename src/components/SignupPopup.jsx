// src/components/SignupPopup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function SignupPopup({ onClose }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "461px",
          minHeight: "580px",
          border: "2px solid #FFFFFF",
          borderRadius: "12px",
          background: "#0B1C39",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px",
          gap: "8px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "4px",
            right: "12px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </span>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "32px",
            color: "#FFFFFF",
            width: "360px",
            height: "36px",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "0",
          }}
        >
          welcome to Aspro IT
        </h1>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: "#6D829F",
            width: "286px",
            height: "18px",
            textAlign: "center",
            marginTop: 0,
          }}
        >
          signup to explore the courses
        </p>

        {/* Name Field */}
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#C9C9C9",
            alignSelf: "flex-start",
            marginLeft: "24px",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          Full Name
        </p>
        <input
          type="text"
          placeholder="Enter your full name"
          style={{
            width: "360px",
            height: "44px",
            borderRadius: "3.3px",
            border: "0.82px solid #2A2A2A",
            background: "#142339",
            paddingLeft: "12px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#FFFFFF",
            outline: "none",
          }}
        />

        {/* Email Field */}
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#C9C9C9",
            alignSelf: "flex-start",
            marginLeft: "24px",
            marginBottom: 0,
          }}
        >
          Email Address
        </p>
        <input
          type="email"
          placeholder="You@example.com"
          style={{
            width: "360px",
            height: "44px",
            borderRadius: "3.3px",
            border: "0.82px solid #2A2A2A",
            background: "#142339",
            paddingLeft: "12px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#FFFFFF",
            outline: "none",
          }}
        />

        {/* Password Field */}
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#C9C9C9",
            alignSelf: "flex-start",
            marginLeft: "24px",
            marginBottom: 0,
          }}
        >
          Password
        </p>
        <input
          type="password"
          placeholder="Enter your password"
          style={{
            width: "360px",
            height: "44px",
            borderRadius: "3.3px",
            border: "0.82px solid #2A2A2A",
            background: "#142339",
            paddingLeft: "12px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#FFFFFF",
            outline: "none",
          }}
        />

        {/* Signup Button */}
        <button
          style={{
            width: "363px",
            height: "54px",
            background: "#052E5A",
            border: "2px solid #2A2A2A",
            color: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "16px",
            marginBottom: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseEnter={(e) => (e.target.style.border = "2px solid #FFFFFF")}
          onMouseLeave={(e) => (e.target.style.border = "1px solid #2A2A2A")}
        >
          Signup
        </button>

        <button
          style={{
            width: "360px",
            height: "48px",
            color: "#434D5B",
            borderRadius: "3.3px",
            border: "1px solid #2A2A2A",
            background: "#142339",
            paddingTop: "4px",
            paddingBottom: "16px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            alignItems: "center",
            fontWeight: 600,
            outline: "none",
          }}
          onMouseEnter={(e) => (e.target.style.border = "2px solid #FFFFFF")}
          onMouseLeave={(e) => (e.target.style.border = "1px solid #2A2A2A")}
        >
          <FcGoogle size={22} />
          {" "}Continue with Google
        </button>
      </div>
    </div>
  );
}
