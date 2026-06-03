import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    alert("Flights Available");
  };

  return (
    <div>
      <h2>Flight Search</h2>

      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSearch}>Search</button>

      <br />
      <br />

      <button
        className="book-flight"
        onClick={() => navigate("/flight-booking")}
      >
        Book Flight
      </button>
    </div>
  );
}

export default FlightSearch;