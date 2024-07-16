import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../../common";
import Advantage from "./Advantage";
import GetInTouch from "./GetInTouch";
import News from "./News";
import Partners from "./Partners";
import RepresentTeam from "./RepresentTeam";
import ShowcaseSkills from "./ShowcaseSkills";
import StateMatch from "./StateMatch";
import TopPerformer from "./TopPerformer";
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
      <TopPerformer />
      <News />
      <GetInTouch />
      <Partners />
    </Box>
  );
};

export default Home;
