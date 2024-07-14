import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const StateCard = ({ source, text }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src={source} sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.text}>{text}</Box>
    </Box>
  );
};

export default StateCard;
