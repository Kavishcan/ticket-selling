import React, { useState } from "react";
import LogDisplay from "./components/LogDisplay";
import TicketDisplay from "./components/TicketDisplay";
import NavBar from "./components/NavBar";
import ConfigForm from "./components/ConfigForm";
import VendorForm from "./components/VendorForm";
import CustomerForm from "./components/CustomerForm";
import StartButton from "./components/StartButton";

function App() {
  const [vendorCount, setVendorCount] = useState("");
  const [customerCount, setCustomerCount] = useState("");
  const [showLogs, setShowLogs] = useState(false);

  const handleStart = () => {
    setShowLogs(true);
  };

  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="container-xxl col p-5">
          <h2 className="mb-4">Configuration Form</h2>
          <ConfigForm />
          <div className="mt-4">
            <VendorForm setVendorCount={setVendorCount} />
            <CustomerForm setCustomerCount={setCustomerCount} />
            <StartButton
              numVendors={vendorCount}
              numCustomers={customerCount}
              onStart={handleStart}
            />
          </div>
        </div>

        <div className="col p-5">
          <LogDisplay />
        </div>
        <div className="col p-5">{showLogs && <TicketDisplay />}</div>
      </div>
    </div>
  );
}

export default App;
