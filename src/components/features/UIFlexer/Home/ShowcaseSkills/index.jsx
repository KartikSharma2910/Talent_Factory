import { Box } from "@mui/material";
import { Button, Card, Container } from "../../../../common";
import styles from "../styles";

const ShowcaseSkills = () => {
  return (
    <Container
      heading="Showcase Your Skills"
      subDescription="Upload your best gameplay video (15 seconds or less)"
      description="and impress our scouts. Show us your batting prowess, your bowling thunder, or your fielding finesse. We want to see what makes you a unique talent!"
    >
      <Box sx={styles.showcaseCardContainer}>
        <Box sx={styles.skillSelectorCard}>
          Choose your state and stand a chance to represent your state!
        </Box>
        <Card as="StateCard" source="/jammu.png" text="Jammu & Kashmir" />
        <Card as="StateCard" source="/andraPradesh.png" text="Andhra Pradesh" />
        <Card as="StateCard" source="/himachal.png" text="Himachal Pradesh" />
      </Box>
      <Box sx={styles.skillNotes}>
        <Box>
          Note : Videos must highlight your cricketing skills and be of high
          quality.
        </Box>
        <Button label="Register Now" />
      </Box>
    </Container>
  );
};

export default ShowcaseSkills;
