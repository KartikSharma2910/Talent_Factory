import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const NewsCard = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box component="img" src="/newsCard1.png" sx={styles.image} />
      </Box>
      <Box sx={styles.text}>
        Australia hand Bangladesh a reality check ahead of WC
      </Box>
    </Box>
  );
};

export default NewsCard;
