import React from "react";
import axios from "axios";

interface Props {
  children: string;
}

export const ButtonConfig = ({ children }: Props) => {
  return <button className="btn btn-primary mt-3">{children}</button>;
};

export default ButtonConfig;
