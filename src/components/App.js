import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;