import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    if (!name || !email || !phone) {
      alert("Fill all fields");
      return;
    }

    navigate("/confirmation", {
      state: { name, email, phone }
    });
  };

  return (
    <div>
      <h2>Booking</h2>

      <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />
      <br /><br />

      <button onClick={submit}>Confirm</button>
    </div>
  );
}

export default FlightBooking;
