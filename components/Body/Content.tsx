import React from "react";
import imageLoader from "../../pages/ImageLoader";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Content() {
  return (
    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          backgroundColor: "#e5fcfc",
          padding: "2% 4% 4% 2%",
          textAlign: "center",
        }}
      >
        <Image
          loader={imageLoader}
          src="https://www.tradingtechnologies.com/wp-content/uploads/2019/03/icon-mdt-black.svg"
          alt="img not found"
          width={60}
          height={35}
        />
        <Typography variant="h6">TRADING</Typography>
        <Typography sx={{ lineHeight: 3 }}>
          <br />
          Execute on the fastest commercially available platform. <br />
          Trade futures, options, cryptocurrencies and more. <br />
          Use the industry-leading tools for trading, charting, spreading,
          <br />
          algos and more.
        </Typography>
      </Box>
      <Box sx={{ padding: "2% 4% 4% 2%", textAlign: "center" }}>
        <Image
          loader={imageLoader}
          src="https://www.tradingtechnologies.com/wp-content/uploads/2019/03/icon-global-black.svg"
          alt="img not found"
          width={60}
          height={45}
        />
        <Typography variant="h6">INFRASTRUCTURE</Typography>
        <br />
        <Typography sx={{ lineHeight: 3 }}>
          Trade on a global network built for speed, accessibility and security.
          <br />
          Get maximum performance from the TT platform.
          <br />
          Leverage our superior hosting, network and exchange services.
          <br />
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#e5fcfc",
          padding: "2% 4% 4% 2%",
          textAlign: "center",
        }}
      >
        <Image
          loader={imageLoader}
          src="https://www.tradingtechnologies.com/wp-content/uploads/2019/03/icon-chart-black.svg"
          alt="img not found"
          width={60}
          height={45}
        />
        <Typography variant="h6">DATA</Typography>
        <Typography sx={{ lineHeight: 3 }}>
          <br />
          Power charts and trades with speed and reliability. <br />
          Access your complete transaction history to inform future trading.{" "}
          <br />
          Utilize machine learning for trade surveillance and compliance. <br />
        </Typography>
      </Box>
    </Grid>
  );
}

export default Content;
