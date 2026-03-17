import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    setMessage("No Flights Available");
  };

  return (
    <div>
      <h1>Flight Booking App</h1>

      {/* Source */}
      <select>
        <option value="">Select Source</option>
        <option value="Delhi">Delhi</option>
      </select>

      {/* Destination */}
      <select>
        <option value="">Select Destination</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Date */}
      <input type="date" />

      {/* Search Button */}
      <button onClick={handleSearch}>Search Flights</button>

      {/* Result */}
      <p>{message}</p>

      {/* Passenger Form */}
      <h2>Passenger Details</h2>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Age" />

      <button>Book Ticket</button>
    </div>
  );
}

export default App;
