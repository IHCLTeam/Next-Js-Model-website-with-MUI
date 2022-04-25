import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imageLoader from "../../ImageLoader";

export default function ForgotPassword() {
  return (
    <Grid>
      <Grid
        sx={{
          fontSize: "larger",
          display: "flex",
          marginLeft: "34%",
          marginTop: "2%",
        }}
      >
        <Typography sx={{ marginRight: "18%" }}>
          <Image
            loader={imageLoader}
            src="https://s26352.pcdn.co/wp-content/themes/tt2/assets/images/logo-tt-full.svg"
            alt="Picture of the author"
            width={180}
            height={38}
          />
        </Typography>
        <Typography>
          Back to .<Link href="\components\Login\Loginpage">Login</Link>
        </Typography>
      </Grid>
      <Grid>
        <Typography
          variant="h4"
          sx={{ marginLeft: "35%", marginBottom: "1%", marginTop: "4%" }}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginLeft: "35%", marginBottom: "2%" }}
        >
          Enter your email address and we will send you instructions to reset
          your <br /> password.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginLeft: "35%", marginBottom: "1%" }}
        >
          Email
        </Typography>
        <Grid item sm={1} sx={{ marginLeft: "35%", marginBottom: "1%" }}>
          <TextField
            sx={{ width: 310 }}
            required
            fullWidth
            name="email"
            label="Enter your Email"
            type="email"
            id="email"
            autoComplete="email"
          />
        </Grid>
        <Link href = '\components\Login\EmailConformation'>
        <Button variant="contained"
          sx={{ marginLeft: "35%" }}
        >
          Continue
        </Button>
        </Link>
        
      </Grid>
    </Grid>
  );
}
