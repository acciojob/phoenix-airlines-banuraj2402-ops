import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightSearch from "./components/FlightSearch";
import FlightBooking from "./components/FlightBooking";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
