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
  },
  {
    id: 3,
    airline: "Air India",
    from: "Mumbai",
    to: "Bengaluru",
    time: "4:00 AM",
    price: 3600
  },
  {
    id: 4,
    airline: "IndiGo",
    from: "Delhi",
    to: "Chennai",
    time: "8:00 PM",
    price: 4800
  }
];

const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = () => {
  if (!from || !to || !date) {
    alert("Please fill all fields");
    return;
  }

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    let filteredFlights = flights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
   );

  // If no matching flights, still return all flights
    if (filteredFlights.length === 0) {
      filteredFlights = flights;
    }

    setResults(filteredFlights);
  };

  if (filteredFlights.length === 0) {
    alert("No flights available");
  }

  setResults(filteredFlights);
};

  return (
    <div>
      <h1>Flight Search App</h1>

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
        </li>
      ))}
    </ul>
  </div>
  );
}

export default FlightSearch;