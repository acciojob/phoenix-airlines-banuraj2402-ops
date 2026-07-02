import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Flight Booking App</h1>
      <h2>Welcome to Flight Booking App</h2>

      <button onClick={() => navigate("/flight-search")}>
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
}

export default LandingPage;