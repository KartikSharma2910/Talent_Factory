import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const RepresentStateCard = ({
  source,
  heading,
  description,
  backgroundColor,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, backgroundColor: backgroundColor }}>
      <Box sx={styles.imageWrap}>
        <Box component="img" src={source} sx={styles.image} />
      </Box>
      <Box sx={styles.heading}>{heading}</Box>
      <Box sx={styles.description}>{description}</Box>
    </Box>
  );
};

export default RepresentStateCard;
