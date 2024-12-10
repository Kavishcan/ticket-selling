import React, { useState } from "react";
import axios from "axios";

const ConfigForm: React.FC = () => {
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [ticketReleaseRate, setTicketReleaseRate] = useState("");
  const [ticketRetrievalRate, setTicketRetrievalRate] = useState("");
  const [maxTicketCapacity, setMaxTicketCapacity] = useState("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = () => {
    const params = new URLSearchParams({
      totalTickets: numberOfTickets,
      ticketReleaseRate,
      customerRetrievalRate: ticketRetrievalRate,
      maxTicketCapacity,
    }).toString();

    axios
      .post(`http://localhost:8081/api/ticket-configuration/config?${params}`)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the data:", error);
      });
  };

  return (
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
  );
};

export default ConfigForm;
