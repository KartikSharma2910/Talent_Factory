import { Box } from "@mui/material";
import React from "react";
import { Container } from "../../../../common";
import styles from "../styles";

const StateMatch = () => {
  return (
    <Container
      heading="State Matches"
      subDescription="Once you've uploaded your video and impressed our scouts, it's time to take your game to the next level! This is where the real competition begins."
      description="State Matches: Here's where you get to showcase your talent against the best players from your state. Compete in a series of three thrilling matches designed to identify the top cricketing talent. Your skills, determination, and teamwork will be put to the test as you fight for a spot on your state's dream team!"
    >
      <Box sx={styles.stateCardWrapper}>
        <Box component="img" src="/stateMatch.png" />
        <Box component="img" src="/stateMatch.png" />
        <Box component="img" src="/stateMatch.png" />
        <Box component="img" src="/stateMatch.png" />
      </Box>
    </Container>
  );
};

export default StateMatch;
