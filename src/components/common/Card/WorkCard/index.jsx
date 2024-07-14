import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const WorkCard = ({ source, text, customStyles }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.imageBox}>
        <Box component="img" src={source} sx={styles.image} />
      </Box>
      <Box sx={styles.text}>{text}</Box>
    </Box>
  );
};

export default WorkCard;
