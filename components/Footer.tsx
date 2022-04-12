import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import imageLoader from "../pages/ImageLoader";

function Footer() {
  return (
    <Grid sx={{ marginTop: "2%" ,color: "#0f448a",marginLeft : '2%', borderTop: 1,marginRight : '30px'}}>
      <Typography sx={{ color: "#0f448a", fontSize: "1.5em" }}>
        CONTENT CREATED
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography sx = {{padding : '1%',fontSize : '1.2em',paddingRight : '8%'}}>
          UI content, <br />
          Back-end logics, <br />
          and all other functionalities and
          <br />
          content and everything, <br />
          are done here.. <br />
        </Typography>
        <Typography  sx = {{padding : '1%',}}>
          <Image
            loader={imageLoader}
            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Image not found"
            width={"600vw"}
            height={"250vh"}
          />
        </Typography>
        <Typography sx={{ color: "#0f548a",padding : '1%',paddingTop : '4%',fontSize : '1.6em' }}>
          We are here to make your exprence smoother.
          <br />
          Contact us now.!
          <br />
          <Button sx={{ backgroundColor: "#0f448a" }}>Contact Us</Button>
        </Typography>
      </Box>

      <Typography sx={{ color: "#0f728a" }}>
        (c) 2022 CREATED. All Rights Reserved.
      </Typography>

    </Grid>
  );
}

export default Footer;
