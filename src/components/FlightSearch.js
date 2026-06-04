import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    navigate("/flight-booking");
  };

  return (
    <div>
      <h2>Flight Search</h2>

      <label>
        <input
          type="radio"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={(e) => setTripType(e.target.value)}
        />
        One Way
      </label>

      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={(e) => setTripType(e.target.value)}
        />
        Round Trip
      </label>

      <br />
      <br />

      <input
        type="text"
        placeholder="Source City"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Destination City"
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

      <button className="book-flight" onClick={handleSearch}>
        Search Flights
      </button>
    </div>
  );
}

export default FlightSearch;