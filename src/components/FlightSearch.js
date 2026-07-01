import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const flights = [
  {
    id: 1,
    airline: "IndiGo",
    from: "Chennai",
    to: "Delhi",
    time: "10:30 AM",
    price: 4500
  },
  {
    id: 2,
    airline: "Air India",
    from: "Chennai",
    to: "Mumbai",
    time: "2:00 PM",
    price: 5200
  }
];

const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    setResults(flights);
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

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <br />
      <br />

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        <option value="">Select Destination</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
      </select>

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSearch}>Search Flights</button>
        

      <br />
      <br />

      <ul>
       {results.map((flight) => (
        <li key={flight.id}>
          <h3>{flight.airline}</h3>

          <p>
           {flight.from} → {flight.to}
          </p>

          <p>{flight.time}</p>

          <button
            className="book-flight"
            onClick={() =>
              navigate("/flight-booking", {
                
                state: { flight }
              })
            }
        >
          Book Flight - ₹{flight.price}
        </button>

          <br />
          <br />
        </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightSearch;