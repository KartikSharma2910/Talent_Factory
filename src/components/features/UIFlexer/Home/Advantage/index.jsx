import { Box } from "@mui/material";
import React from "react";
import { Container } from "../../../../common";
import styles from "../styles";

const Advantage = () => {
  return (
    <Container heading="The Grant Talent Factory Advantage 3 Reasons to Stand Out">
      <Box sx={styles.advantageWrap}>
        <Box sx={styles.leftBox}>
          <Box sx={styles.mainImageWrap}>
            <Box component="img" src="/largeImage.png" sx={styles.mainImage} />
          </Box>
          <Box sx={styles.miniContainer}>
            <Box sx={styles.miniImageWrap}>
              <Box component="img" src="/mini1.png" sx={styles.miniImage} />
            </Box>
            <Box sx={styles.miniImageWrap}>
              <Box component="img" src="/mini2.png" sx={styles.miniImage} />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.rightBox}>
          <Box sx={styles.databox}>
            <Box sx={styles.number}>1</Box>
            <Box sx={styles.dataContent}>
              <Box sx={styles.dataHeading}>Open to All Ages (15+)</Box>
              <Box sx={styles.dataDesc}>
                Dream of becoming a cricket star? Age doesn't hold you back
                here! If you're 15 or above and brimming with talent, The Grant
                Talent Factory is your chance to shine.
              </Box>
            </Box>
          </Box>
          <Box sx={styles.databox}>
            <Box sx={styles.number}>2</Box>
            <Box sx={styles.dataContent}>
              <Box sx={styles.dataHeading}>Negotiate Your Worth</Box>
              <Box sx={styles.dataDesc}>
                Get rewarded for your talent! If you impress in the selection
                process, you'll have the opportunity to negotiate your playing
                value with the shortlisted state teams.
              </Box>
            </Box>
          </Box>
          <Box sx={styles.databox}>
            <Box sx={styles.number}>3</Box>
            <Box sx={styles.dataContent}>
              <Box sx={styles.dataHeading}>Represent Your State with Pride</Box>
              <Box sx={styles.dataDesc}>
                Cricket is all about passion and regional pride. As a
                shortlisted player, you'll have the honor of representing your
                state in thrilling matches against other state teams.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Advantage;
