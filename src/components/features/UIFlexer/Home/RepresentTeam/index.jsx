import { Box } from "@mui/material";
import React from "react";
import { representState } from "../../../../../constants/representState";
import { Card, Container } from "../../../../common";

const RepresentTeam = () => {
  return (
    <Container
      heading="Represent Your State Team"
      description="Are you ready to represent your state and lead them to victory? Register now and embark on your cricketing dream!"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6rem",
        }}
      >
        {representState.map((item, index) => (
          <Card key={index} as="RepresentStateCard" {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default RepresentTeam;
