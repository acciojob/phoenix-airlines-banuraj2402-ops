import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};

  return (
    <div>
      <h2>Booking Confirmed</h2>

      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.email}</p>
      <p>Mobile Number: {data.phone}</p>

      <br />

      <button onClick={() => navigate("/")}>
        Back To Home
      </button>
    </div>
  );
}

export default Confirmation;