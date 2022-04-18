import { Box, Grid, Typography } from "@mui/material";
import { color } from "@mui/system";
import { Console } from "console";
import React from "react";

function Header() {
  return (
    <Grid>
      <Box zIndex="tooltip" sx={{ textAlign: "center" }}>
        <Box
          zIndex="modal"
          style={{ height: 0, width: "100%", position: "absolute" }}
          top={"25%"}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            ENTERPRISE SOLUTIONS FOR FUTURES TRADING, <br />
            INFRASTRUCTURE AND DATA.
            <br />
            <br />
          </Typography>

          <Typography variant="h5" sx={{ color: "white" }}>
            Utilize our technology as the end-to-end foundation for your futures
            trading business.
            <br />
            <br />
            <br />
          </Typography>
        </Box>

        <video width="100%" height="auto" autoPlay>
          <source
            data-src="https://s26352.pcdn.co/wp-content/uploads/2020/05/Homepage-Hero-VideoEnterprise.mp4"
            type="video/mp4"
            src="https://s26352.pcdn.co/wp-content/uploads/2020/05/Homepage-Hero-VideoEnterprise.mp4"
          />
        </video>
      </Box>
    </Grid>
  );
}

export default Header;
