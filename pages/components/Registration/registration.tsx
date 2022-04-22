import * as React from "react";
import { Box, styled, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Image from "next/image";
import Button from "@mui/material/Button";
import imageLoader from "../../ImageLoader";
import Link from "next/link";
import TextField from "@mui/material/TextField";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  maxWidth: 260,
  textAlign: "center",
  boxShadow: "none",
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://github.githubassets.com/images/modules/site/home/astro-mona.svg"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

function Copyright(props: any) {
  return (
    <Box>
      <Grid>
        <Item sx={{ textAlign: "center", boxShadow: "none", borderTop: 1 }}>
          * By signing up, you agree to our Terms of Use and to receive Our
          emails and updates and acknowledge that you read our Privacy Policy.
        </Item>
        <Item sx={{ textAlign: "center", boxShadow: "none" }}>
          This site is protected by reCAPTCHA Enterprise and the Google Privacy
          Policy And Terms of Use apply
        </Item>
        <Item sx={{ textAlign: "center", boxShadow: "none" }}>
          {new Date().getFullYear()}.
        </Item>
      </Grid>
    </Box>
  );
}

const theme = createTheme();

export default function Registration() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box style={styles.paperContainer}>
      <Grid>
        <Typography
          width={64}
          sx={{ marginTop: "2px", marginLeft: "2px" }}
        >
          <Link href="/">
            <Button sx ={{color : 'black',fontFamily : 'revert',fontWeight :'bold',fontSize : '100%'}}>Home</Button>
          </Link>
        </Typography>

        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", textDecoration: "none" }}
        >
          Already have an account?
          <Link href="\components\Login\Loginpage">Log In</Link>
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          marginLeft: "23%",
          marginTop: "12%",
          marginBottom: "6%",
        }}
        width={"70%"}
      >
        <Grid
          container
          direction={"column"}
          xs={3}
          spacing={1}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid sx={{ marginBottom: "2%" }}>
            <TextField
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="confromemail"
              autoComplete="fullname"
            />
          </Grid>
          <Grid sx={{ marginBottom: "4%" }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid sx={{ marginBottom: "4%" }}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid sx={{ marginBottom: "4%" }}>
            <TextField
              required
              fullWidth
              id="confrompassword"
              label="Confrom Password"
              name="confrompassword"
              autoComplete="confrompassword"
            />
          </Grid>
          <Grid>
            <Typography
              sx={{
                width: 120,
                border: 1,
                borderRadius: "999px",
                textAlign: "center",
                borderColor: "blue",
              }}
            >
              <Button sx={{ fontSize: "large" }}>Sign In</Button>
            </Typography>
          </Grid>
        </Grid>

        {/* Line */}

        <Grid sx={{ marginLeft: "16%", paddingRight: "14%" }}>
          <Typography sx={{ borderRight: 1 }} height={"100%"}></Typography>
        </Grid>

        <Grid>
          <Grid sx={{ display: "flex", marginBottom: "6%", marginTop: "20%" }}>
            <Typography sx={{ border: 1, paddingTop: "9px" }}>
              <Image
                loader={imageLoader}
                src="https://static.parastorage.com/services/login-statics/1.2155.0/images/google-logo.svg"
                alt="Picture of the author"
                width={60}
                height={30}
              />
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#4285f4",
                border: 1,
                color: "white",
                paddingTop: "12px",
                paddingLeft: "6%",
                paddingRight: "6%",
                paddingBottom: "12px",
              }}
            >
              Continue with Google
            </Typography>
          </Grid>

          <Grid item xs={2} sx={{ display: "flex", marginBottom: "6%" }}>
            <Typography
              sx={{
                border: 1,
                paddingTop: "7px",
                paddingRight: "7px",
                paddingLeft: "7px",
                paddingBottom: "2px",
              }}
            >
              <Image
                loader={imageLoader}
                src="https://compass-ssl.xboxlive.com/assets/40/69/4069b5a7-d08f-4366-8a8a-506fd14767e0.png?n=Office_m365_32x32_Dec20_V7.png"
                alt="Picture of the author"
                width={40}
                height={32}
              />
            </Typography>
            <Typography
              sx={{
                // backgroundColor: "#3b5998",
                border: 1,
                paddingTop: "9px",
                // color: "white",
                paddingRight: "9px",
                paddingLeft: "8px",
                paddingBottom: "12px",
              }}
            >
              Continue with Microsoft
            </Typography>
          </Grid>

          <Grid item xs={2} sx={{ display: "flex" }}>
            <Typography sx={{ border: 1, paddingTop: "9px" }}>
              <Image
                loader={imageLoader}
                src="	https://static.parastorage.com/services/login-statics/1.2155.0/images/facebook-logo.svg"
                alt="Picture of the author"
                width={60}
                height={30}
              />
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#3b5998",
                border: 1,
                paddingTop: "12px",
                color: "white",
                paddingRight: "6px",
                paddingLeft: "6px",
                paddingBottom: "12px",
              }}
            >
              Continue with Facebook
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Copyright />
      </Grid>
    </Box>
  );
}