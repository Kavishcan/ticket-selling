import React, { useEffect, useState } from "react";
import axios from "axios";

const TicketDisplay: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/ticket-configuration/logs"
        );
        setLogs(response.data);
      } catch (error) {
        console.error("There was an error fetching the logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketDisplay;
