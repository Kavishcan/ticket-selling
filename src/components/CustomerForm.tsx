import React, { useState } from "react";
import axios from "axios";

const CustomerForm: React.FC = () => {
  const [customerCount, setCustomerCount] = useState("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleCustomerSubmit = () => {
    axios
      .post(
        `http://localhost:8081/api/ticket-configuration/set-customers?numCustomers=${customerCount}`
      )
      .then((response) => {
        console.log("Customer count sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the customer count:", error);
      });
  };

  return (
    <div className="mb-3">
      <label className="form-label">Customer Count</label>
      <input
        type="text"
        className="form-control"
        value={customerCount}
        onChange={handleInputChange(setCustomerCount)}
      />
      <button
        type="button"
        className="btn btn-secondary mt-2"
        onClick={handleCustomerSubmit}
      >
        Set Customer Count
      </button>
    </div>
  );
};

export default CustomerForm;
