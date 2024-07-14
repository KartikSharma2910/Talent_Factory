import { Box } from "@mui/material";
import React from "react";
import { workData } from "../../../../../constants/workData";
import { Card, Container } from "../../../../common";
import styles from "../styles";

const Working = () => {
  return (
    <Container
      heading="How It Works"
      description=" Learn the step-by-step process of how you can participate and excel in
  The Grant Talent Factory."
    >
      <Box sx={styles.cardWrapper}>
        {workData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
    </Container>
  );
};

export default Working;
