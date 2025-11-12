import React, { useState } from "react";
import Header from "../components/Header";
import bg from "../assets/homeBg.jpg";
import contactImg from "../assets/contact.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", fontFamily: "Poppins, sans-serif" }}>
      <Header />

      <div
        style={{
          width: "1440px",
          height: "550px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          padding: "0 10px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={contactImg}
            alt="Contact Illustration"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 600,
              marginBottom: "10px",
              color: "#FFFFFF",
            }}
          >
            Get in Touch
          </h1>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "80%",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                background: "#FFFFFF",
                color: "#000",
                fontSize: "18px",
                paddingLeft: "20px",
                outline: "none",
              }}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              style={{
                width: "80%",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                background: "#FFFFFF",
                color: "#000",
                fontSize: "18px",
                paddingLeft: "20px",
                outline: "none",
              }}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "78%",
                height: "100px",
                borderRadius: "10px",
                border: "none",
                background: "#FFFFFF",
                color: "#000",
                fontSize: "18px",
                padding: "15px 20px",
                resize: "none",
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                width: "50%",
                height: "50px",
                borderRadius: "25px",
                border: "none",
                background: "#00A8FF",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0090DD")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00A8FF")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
