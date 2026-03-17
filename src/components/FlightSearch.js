import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h2>Flight Search</h2>

      <input type="text" placeholder="From" onChange={(e)=>setFrom(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="To" onChange={(e)=>setTo(e.target.value)} />
      <br /><br />

      <input type="date" onChange={(e)=>setDate(e.target.value)} />
      <br /><br />

      {/* IMPORTANT BUTTON */}
      <button className="book-flight" onClick={()=>navigate("/flight-booking")}>
        Book Flight
      </button>
    </div>
  );
}

export default FlightSearch;
