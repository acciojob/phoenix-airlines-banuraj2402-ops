import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!searched) {
      setMessage("No Flights Available");
      setSearched(true);
    } else {
      setMessage("Flights Available");
    }
  };

  return (
    <div>
      <h1>Welcome to Flight Booking App</h1>

      <select>
        <option value="">Select Source</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select>
        <option value="">Select Destination</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <input type="date" />

      <button id="search-btn" onClick={handleSearch}>
        Search Flights
      </button>

      <p>{message}</p>

      <h2>Passenger Details</h2>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Age" />

      <button id="book-btn">Book Ticket</button>
    </div>
  );
}

export default App;
