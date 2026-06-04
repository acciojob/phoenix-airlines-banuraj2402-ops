import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/confirmation", {
      state: { name, email, phone }
    });
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submit}>Confirm Booking</button>
    </div>
  );
}

export default FlightBooking;