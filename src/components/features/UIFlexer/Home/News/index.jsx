import { Box } from "@mui/material";
import React from "react";
import { newsData } from "../../../../../constants/newsData";
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
        {newsData.map((item, index) => (
          <Card key={index} as="NewsCard" {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default News;
