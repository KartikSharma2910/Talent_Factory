import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Partners = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.text}>Sponsoring Partner</Box>
      <Box component="img" src="/partners.png" />
    </Box>
  );
};

export default Partners;
