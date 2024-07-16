import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../../../common";
import styles from "./styles";

const GetInTouch = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftBox}>
        <Box sx={styles.logoBox}>
          <Box>The Grant</Box>
          <Box>
            Talent{" "}
            <Box component="span" sx={styles.factory}>
              Factory
            </Box>
          </Box>
        </Box>
        <Box sx={styles.text}>
          Calling all young cricket fanatics with dreams of cricketing glory!
          The Grant Talent Factory has arrived, offering a revolutionary
          platform to unleash your talent and represent your state.
        </Box>
        <Button label="Learn More" customStyles={styles.button} />
      </Box>
      <Box sx={styles.rightBox}>
        <Box sx={styles.container}>
          <Box sx={styles.heading}>GET IN TOUCH</Box>
          <Box sx={styles.description}>Feel free to leave a Message here</Box>
        </Box>
        <Button label="Submit" customStyles={styles.submitButton} />
      </Box>
    </Box>
  );
};

export default GetInTouch;
