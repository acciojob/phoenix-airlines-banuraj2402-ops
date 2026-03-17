import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Flight Booking App</h1>

      <select>
        <option value="">Select Source</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select>
        <option value="">Select Destination</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <input type="date" />

      <button onClick={() => setMessage("No Flights Available")}>
        Search Flights
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;
