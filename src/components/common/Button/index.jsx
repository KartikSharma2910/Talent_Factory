import { Button as MatButton } from "@mui/material";
import React from "react";
import styles from "./styles";

const Button = ({ label, customStyles }) => {
  return (
    <MatButton sx={{ ...styles.wrapper, ...customStyles }}>{label}</MatButton>
  );
};

export default Button;
