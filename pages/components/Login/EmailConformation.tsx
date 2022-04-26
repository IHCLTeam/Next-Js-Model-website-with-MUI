import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import imageLoader from "../../ImageLoader";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  maxWidth: 500,
  boxShadow: "none",
}));

function Copyright(props: any) {
  return (
    <Grid sx={{ mt: 25, mx: "auto", maxWidth: "60%", textAlign: "center" }}>
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

export default function EmailConformation() {
  return (
    <Grid>
      <StyledPaper
        sx={{
          my: 8,
          p: 2,
          mx: "auto",
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
              height={"80%"}
            />
          </Typography>
          <Typography sx={{ px: 4, py: 5 }}>
            Back to .<Link href="/components/Login/Loginpage">Login</Link>
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" sx={{ my: 3 }}>
            Next, check your email
          </Typography>
          <Typography variant="body1" sx={{ py: "5%", my: 2 }}>
            We sent an email to aad'. Please follow the instructions to reset
            your password
          </Typography>
          <Typography variant="body1">
            Typed in the wrong email?
            <Link href="/components/Login/ForgotPassword">
              Go back and update.
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ py: "4%", my: 4 }}>
            Haven’t received the email yet?
            <Link>Resend</Link>
          </Typography>
        </Grid>
      </StyledPaper>

      <Copyright />
    </Grid>
  );
}
