import React, { useState } from "react";
import axios from "axios";
import LogDisplay from "./components/LogDisplay";
import TicketDisplay from "./components/TicketDisplay";
import NavBar from "./components/NavBar";

function App() {
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [ticketReleaseRate, setTicketReleaseRate] = useState("");
  const [ticketRetrievalRate, setTicketRetrievalRate] = useState("");
  const [maxTicketCapacity, setMaxTicketCapacity] = useState("");
  const [vendorCount, setVendorCount] = useState("");
  const [customerCount, setCustomerCount] = useState("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      console.log(event.target.value);
    };

  const handleSubmit = () => {
    const data = {
      numberOfTickets,
      ticketReleaseRate,
      ticketRetrievalRate,
      maxTicketCapacity,
    };

    axios
      .post("/api/tickets", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the data:", error);
      });
  };

  const handleVendorSubmit = () => {
    axios
      .post("/api/vendor-count", { vendorCount })
      .then((response) => {
        console.log("Vendor count sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the vendor count:", error);
      });
  };

  const handleCustomerSubmit = () => {
    axios
      .post("/api/customer-count", { customerCount })
      .then((response) => {
        console.log("Customer count sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the customer count:", error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="container-xxl col p-5">
          <h2 className="mb-4">Configuration Form</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Enter the Number Of Tickets</label>
              <input
                type="text"
                className="form-control"
                value={numberOfTickets}
                onChange={handleInputChange(setNumberOfTickets)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ticket Release Rate</label>
              <input
                type="text"
                className="form-control"
                value={ticketReleaseRate}
                onChange={handleInputChange(setTicketReleaseRate)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ticket Retrieval Rate</label>
              <input
                type="text"
                className="form-control"
                value={ticketRetrievalRate}
                onChange={handleInputChange(setTicketRetrievalRate)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Maximum Ticket Capacity</label>
              <input
                type="text"
                className="form-control"
                value={maxTicketCapacity}
                onChange={handleInputChange(setMaxTicketCapacity)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
            >
              Config
            </button>
          </form>
          <div className="mt-4">
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
          </div>
        </div>

        <div className="col p-5">
          <LogDisplay />
        </div>
        <div className="col p-5">
          <TicketDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
