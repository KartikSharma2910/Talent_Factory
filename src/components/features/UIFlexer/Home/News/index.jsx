import React from "react";
import { Box } from "@mui/material";
import { Card, Container } from "../../../../common";

const News = () => {
  return (
    <Container heading="News">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card as="NewsCard" />
        <Card as="NewsCard" />
        <Card as="NewsCard" />
        <Card as="NewsCard" />
      </Box>
    </Container>
  );
};

export default News;
