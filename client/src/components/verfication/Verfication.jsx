import React from "react";
import { useState } from "react";
import "../../App.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Api_Url,
  IDENTIFIER_ID,
  YOUR_SENDER_NAME,
  YOUR_MESSAGE,
  YOUR_CALLBACK,
  YOUR_API_KEY,
} from "../key/Key";

const Verfication = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSend = async () => {
    try {
      const response = await fetch(
        `${Api_Url}?from=${IDENTIFIER_ID}&sender=${YOUR_SENDER_NAME}&to=${phoneNumber}&message=${YOUR_MESSAGE}&callback=${YOUR_CALLBACK}`,
        {
          headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`,
          },
          mode: "no-cors",
          method: "GET",
        },
        
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="text">
          <h1>Verfiy Your Number</h1>
          <h4>
            please enter your Country&
            <br /> your PhoneNumber
          </h4>
        </div>

        <PhoneInput
          className="react-phone-number-input"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          defaultCountry="ET"
        />
        <button className="btn" type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </section>
  );
};

export default Verfication;
