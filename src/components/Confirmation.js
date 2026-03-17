import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  return (
    <div>
      <h2>Booking Confirmed</h2>

      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>

      <button onClick={()=>navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default Confirmation;
