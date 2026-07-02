import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};

  return (
    <div>
      <h2>Thank you for the Booking.</h2>
      <p>Thank you for the Booking. Click the below button to return to home page</p>

      {data.firstName && (
        <p>
          Name: {data.firstName} {data.lastName}
        </p>
      )}

      <br />

      <button onClick={() => navigate("/")}>
        BACK TO HOME
      </button>
    </div>
  );
}

export default Confirmation;