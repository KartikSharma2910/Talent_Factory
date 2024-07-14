import { Box, Button, Tab, Tabs } from "@mui/material";
import React, { Fragment, useState } from "react";
import styles from "./styles";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <Box hidden={value !== index} id={`tabpanel-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ParadoxLayer = ({ home, team, working, register }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Fragment>
      <Box sx={styles.wrapper}>
        <Box sx={styles.imageWrapper}>
          <Box component="img" src="/banner.png" sx={styles.image} />
          <Box sx={styles.overlay} />
        </Box>
        <Box sx={styles.header}>
          <Box sx={styles.logoBox}>
            <Box>The Grant</Box>
            <Box>
              Talent{" "}
              <Box component="span" sx={styles.factory}>
                Factory
              </Box>
            </Box>
          </Box>
          <Box sx={styles.tabs}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Team" {...a11yProps(1)} />
              <Tab label="How It Works" {...a11yProps(2)} />
              <Tab label="Register" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <Button sx={styles.contactUs}>Contact Us</Button>
        </Box>
        <Box sx={styles.dataCenter}>
          <Box sx={styles.headline}>The Grant Talent Factory</Box>
          <Box sx={styles.mainLine}>Unleash</Box>
          <Box sx={styles.mainLine}>Your Cricketing Potential!</Box>
          <Button sx={styles.register}>Register Now</Button>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {home}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {team}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {working}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {register}
      </CustomTabPanel>
    </Fragment>
  );
};

export default ParadoxLayer;
