import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightBooking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/confirmation", {
      state: { firstName,lastName, email, phone }
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

    <br />
    <br />

    <input
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
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
        placeholder="Mobile Number"
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