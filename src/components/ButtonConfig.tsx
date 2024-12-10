import React from 'react'
import axios from 'axios';

interface Props {
  children: string;
}

export const ButtonConfig = ({children}:Props) => {
  const getConfig = () => {
    try {
      const response = axios.post("http://localhost:8081/api/ticket-configuration/config")
    } catch (error) {
      
    }
  };
  return (
    <button className="btn btn-primary mt-3" >{children}</button>
  )
}

export default ButtonConfig;