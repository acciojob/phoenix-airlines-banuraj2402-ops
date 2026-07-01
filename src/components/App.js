import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Flight Booking App</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;