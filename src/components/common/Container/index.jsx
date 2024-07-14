import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Container = ({ heading, subDescription, description, children }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>{heading}</Box>
      {subDescription && <Box sx={styles.subDescription}>{subDescription}</Box>}
      <Box sx={styles.description}>{description}</Box>
      <Box sx={styles.children}>{children}</Box>
    </Box>
  );
};

export default Container;
