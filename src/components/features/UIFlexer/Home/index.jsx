import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../../common";
import Advantage from "./Advantage";
import RepresentTeam from "./RepresentTeam";
import ShowcaseSkills from "./ShowcaseSkills";
import StateMatch from "./StateMatch";
import Working from "./Working";
import styles from "./styles";

const Home = () => {
  return (
    <Box sx={styles.container}>
      <Working />
      <Box sx={styles.buttonWrap}>
        <Button label="Learn More" />
      </Box>
      <Advantage />
      <StateMatch />
      <ShowcaseSkills />
      <RepresentTeam />
    </Box>
  );
};

export default Home;
