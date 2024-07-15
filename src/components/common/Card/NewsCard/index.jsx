import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const NewsCard = ({ background, source, text }) => {
  return (
    <Box sx={{ ...styles.wrapper, backgroundColor: background }}>
      <Box sx={styles.imageWrapper}>
        <Box component="img" src={source} sx={styles.image} />
      </Box>
      <Box sx={styles.text}>{text}</Box>
    </Box>
  );
};

export default NewsCard;
