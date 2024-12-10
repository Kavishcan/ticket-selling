import React, { useState } from "react";
import axios from "axios";

interface CustomerFormProps {
  setCustomerCount: React.Dispatch<React.SetStateAction<string>>;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ setCustomerCount }) => {
  const [customerCount, setLocalCustomerCount] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalCustomerCount(value);
    setCustomerCount(value);
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
        onChange={handleInputChange}
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
