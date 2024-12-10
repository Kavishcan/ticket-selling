import React from "react";
import axios from "axios";

interface StartButtonProps {
  numVendors: string;
  numCustomers: string;
  onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({
  numVendors,
  numCustomers,
  onStart,
}) => {
  const handleStart = () => {
    const params = new URLSearchParams({
      numVendors,
      numCustomers,
    }).toString();

    axios
      .post(`http://localhost:8081/api/ticket-configuration/start?${params}`)
      .then((response) => {
        console.log("System started successfully:", response.data);
        onStart(); // Call the onStart function to show logs
      })
      .catch((error) => {
        console.error("There was an error starting the system:", error);
      });
  };

  return (
    <button
      type="button"
      className="btn btn-success mt-3"
      onClick={handleStart}
    >
      Start
    </button>
  );
};

export default StartButton;
