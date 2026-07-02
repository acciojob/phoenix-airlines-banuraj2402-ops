import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FlightBooking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const flight = location.state?.flight;

  const submit = () => {
    const newErrors = [];
    if (!firstName.trim()) newErrors.push("First name is required");
    if (!lastName.trim())  newErrors.push("Last name is required");
    if (!email.trim())     newErrors.push("Email is required");
    if (!phone.trim())     newErrors.push("Mobile number is required");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    navigate("/confirmation", {
      state: { firstName, lastName, email, phone, flight }
    });
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <button onClick={submit}>Confirm Booking</button>

      <ul>
        {errors.map((err, i) => (
          <li key={i} style={{ color: "red" }}>{err}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlightBooking;