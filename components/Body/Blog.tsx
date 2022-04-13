import { Button, Grid, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://s26352.pcdn.co/wp-content/uploads/2022/03/Homepage-Promo-Support-sm.jpg"})`,
    height: 600,
    outerWidth: 100,
  },
};
function Blog() {
  return (
    <Box style={styles.paperContainer}>
      .
      <Grid
        sx={{
          padding: "80px",
          backgroundColor: "#000000cc",
          width: "50%",
          color: "white",
          textAlign: "center",
          marginTop: "8%",
          marginLeft: "25%",
        }}
        top={100}
      >
        <Typography variant="h4">HELP LIBRARY</Typography>
        <Typography>
          Master TT software with our expansive collection of documentation,
          tutorials and training videos
        </Typography>
        <Button sx={{ backgroundColor: "none" }}>Contact Us</Button>
      </Grid>
    </Box>
  );
}

export default Blog;
