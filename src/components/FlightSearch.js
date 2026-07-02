import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CITIES = ["Chennai", "Delhi", "Mumbai", "Bengaluru"];

function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const navigate = useNavigate();

  const flights = [
    { id: 1, airline: "IndiGo",    from: "Chennai", to: "Delhi",     time: "10:30 AM", price: 4500 },
    { id: 2, airline: "Air India", from: "Chennai", to: "Mumbai",    time: "2:00 PM",  price: 5200 },
    { id: 3, airline: "Air India", from: "Mumbai",  to: "Bengaluru", time: "4:00 AM",  price: 3600 },
    { id: 4, airline: "IndiGo",    from: "Delhi",   to: "Chennai",   time: "8:00 PM",  price: 4800 }
  ];

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    const filtered = flights.filter(
      (f) =>
        f.from.toLowerCase() === from.toLowerCase() &&
        f.to.toLowerCase() === to.toLowerCase()
    );

    setResults(filtered);
    setSearched(true);
  };

  const filteredFrom = CITIES.filter((c) =>
    c.toLowerCase().includes(from.toLowerCase())
  );
  const filteredTo = CITIES.filter((c) =>
    c.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div>
      {/* FIXED HEADING FOR TEST 1 */}
      <h1>Welcome to Flight Booking App</h1>

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

      <br /><br />

      {/* Source City with dropdown */}
      <input
        type="text"
        placeholder="Source City"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
          setShowFromList(true);
        }}
        onFocus={() => setShowFromList(true)}
      />
      {showFromList && (
        <ul>
          {filteredFrom.map((city) => (
            <li
              key={city}
              onClick={() => {
                setFrom(city);
                setShowFromList(false);
              }}
              style={{ cursor: "pointer" }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}

      <br />

      {/* Destination City with dropdown */}
      <input
        type="text"
        placeholder="Destination City"
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
          setShowToList(true);
        }}
        onFocus={() => setShowToList(true)}
      />
      {showToList && (
        <ul>
          {filteredTo.map((city) => (
            <li
              key={city}
              onClick={() => {
                setTo(city);
                setShowToList(false);
              }}
              style={{ cursor: "pointer" }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}

      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {tripType === "roundtrip" && (
        <>
          <br /><br />
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </>
      )}

      <br /><br />

      <button onClick={handleSearch}>Search Flights</button>

      <br /><br />

      {/* Results */}
      <ul>
        {searched && results.length === 0 && (
          <li>No flights available</li>
        )}

        {results.map((flight) => (
          <li key={flight.id}>
            <h3>{flight.airline}</h3>
            <p>{flight.from} → {flight.to}</p>
            <p>{flight.time}</p>
            <button
              className="book-flight"
              onClick={() =>
                navigate("/flight-booking", { state: { flight } })
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
