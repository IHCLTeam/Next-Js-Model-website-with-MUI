import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imageLoader from "../../ImageLoader";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  maxWidth: 600,
  color: theme.palette.text.primary,
  boxShadow: "none",
}));



function Copyright(props: any) {
  return (
    <Grid
      sx={{ mt: 25, mx: "auto", maxWidth: "60%", textAlign: "center"}}
    >
      <Typography sx={{ borderTop: 1 }}>
        * By logging in, you agree to our Terms of Use and to receive our emails
        and updates and acknowledge that you read our Privacy Policy.
      </Typography>
      <Typography>
        This site is protected by reCAPTCHA Enterprise and the Google Privacy
        Policy And Terms of Use apply
      </Typography>
      <Typography>{new Date().getFullYear()}.</Typography>
    </Grid>
  );
}


export default function ForgotPassword() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <StyledPaper
        sx={{
          my: 6,
          mx: "auto",
          p: 2,
        }}
      >
        <Grid
          sx={{
            fontSize: "larger",
            display: "flex",
          }}
        >
          <Typography>
            <Image
              loader={imageLoader}
              src="https://us.123rf.com/450wm/sitiardi21/sitiardi211701/sitiardi21170100013/70276178-hotel-reflection-logo.jpg?ver=6"
              alt="Picture of the author"
              width={"100%"}
              height={"90%"}
            />
          </Typography>
          <Typography sx={{ p: 5 }}>
            Back to .<Link href="/components/Login/Loginpage">Login</Link>
          </Typography>
        </Grid>
      </StyledPaper>

      <StyledPaper
        sx={{
          mx: "auto",
        }}
      >
        <Grid>
          <Typography variant="h4" sx={{ p: 1 }}>
            Forgot Password
          </Typography>
          <Typography variant="body1" sx={{ p: 1 }}>
            Enter your email address and we will send you instructions to reset
            your <br /> password.
          </Typography>
          <Typography variant="body1" sx={{ p: 1 }}>
            Email
          </Typography>
          <Grid item sm={1} sx={{ p: 1 }}>
            <TextField
              sx={{ width: 300 }}
              required
              fullWidth
              name="email"
              label="Enter your Email"
              type="email"
              id="email"
              autoComplete="email"
            />
          </Grid>
          <Typography sx={{ p: 1 }}>
            <Link href="/components/Login/EmailConformation">
              <Button variant="contained">Continue</Button>
            </Link>
          </Typography>
        </Grid>
      </StyledPaper>

      <Copyright />

    </Box>
  );
}
