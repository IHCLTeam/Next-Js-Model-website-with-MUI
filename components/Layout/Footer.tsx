import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://s26352.pcdn.co/wp-content/themes/tt2/assets/images/bg-footer.png"})`,
    height: 146,
    outerWidth: 100,
  },
};

function Footer() {
  return (
    <Grid style={styles.paperContainer}>
      <Typography
        sx={{
          color: "#0f448a",
          fontSize: "1.5em",
          marginTop: "1%",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}
        borderTop={1}
      >
        CONTENT CREATED 2022.
      </Typography>

      <Typography>
        Language: English | 日本語 Copyright © 2022 Trading Technologies
        International, Inc. All rights reserved.
      </Typography>

      <Typography
        sx={{ color: "#0f728a", paddingTop: "1%", paddingBottom: "1%" }}
      >
        (c) 2022 CREATED. All Rights Reserved.
      </Typography>

      <Typography
        sx={{
          color: "fff",
          padding: "1%",
          backgroundColor: "#32323acc",
        }}
      >
        This website uses cookies for analytics and functionality purposes. To
        find out more about our use of cookies or to manage your choices, view
        our cookies policy. To view our privacy policy.
      </Typography>
    </Grid>
  );
}

export default Footer;
