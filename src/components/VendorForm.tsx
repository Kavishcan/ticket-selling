import React, { useState } from "react";
import axios from "axios";

const VendorForm: React.FC = () => {
  const [vendorCount, setVendorCount] = useState("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleVendorSubmit = () => {
    axios
      .post(
        `http://localhost:8081/api/ticket-configuration/set-vendors?numVendors=${vendorCount}`
      )
      .then((response) => {
        console.log("Vendor count sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the vendor count:", error);
      });
  };

  return (
    <div className="mb-3">
      <label className="form-label">Vendor Count</label>
      <input
        type="text"
        className="form-control"
        value={vendorCount}
        onChange={handleInputChange(setVendorCount)}
      />
      <button
        type="button"
        className="btn btn-secondary mt-2"
        onClick={handleVendorSubmit}
      >
        Set Vendor Count
      </button>
    </div>
  );
};

export default VendorForm;
