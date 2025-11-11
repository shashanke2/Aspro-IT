import React from "react";
import { CircleAlert, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function PaymentFail() {
  const navigate = useNavigate();

  return (
    <div className="relative">
          <Header />
    <div
      style={{
        width: "1052px",
        height: "400px",
        marginTop: "50px",
        marginBottom: "60px",
        marginLeft: "140px",
        borderRadius: "8px",
        background:
          "radial-gradient(149.8% 402.76% at 29.09% 23.7%, #101010 11.88%, #595959 100%)",
        boxShadow:
          "-4px -4px 16px 0px #FFFFFF14, 4px 4px 16px 0px #FFFFFF29",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 32px",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "35px",
          background: "#FF7979",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <CircleAlert size={44} color="#AC0606" />
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "48px",
          color: "#AC0606",
          textAlign: "center",
          marginTop: "2px",   
          marginBottom: "20px",
        }}
      >
        Sorry! your payment is failed
      </h1>

      {/* Sub Heading */}
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: "24px",
          width: "731px",
        }}
      >
        Try Again
      </p>

      {/* Line */}
      <div
        style={{
          width: "1050px",
          border: "1px solid #FFFFFF40",
          marginTop: "40px",
          marginBottom: "56px",
        }}
      ></div>

      {/* Go to home Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "236px",
          height: "48px",
          borderRadius: "8px",
          background: "#0051BA",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <LayoutDashboard size={20} color="#FFFFFF" /> Redirect to Home
      </button>
    </div>
    </div>
  );
}
