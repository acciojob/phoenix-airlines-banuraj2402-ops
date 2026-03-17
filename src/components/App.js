import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <div>
      {/* Do not remove this div */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlightSearch />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
