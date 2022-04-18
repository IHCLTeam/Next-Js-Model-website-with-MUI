import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright ©
      <Link color="inherit" href="/">
        Your Website
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

const theme = createTheme();

export default function Registration() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      confrompassword: data.get("confrompassword"),
    });
  };

  return (
    <Typography>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 4,
          }}
        >
          <Typography>
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              SignIn
            </Typography>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  name="LastName"
                  autoComplete="lastname"
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item sm={9}>
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
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="confrompassword"
                  label="Confrom Password"
                  name="confrompassword"
                  autoComplete="confrompassword"
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="contactnumber"
                  label="phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="accept Terms and conditions"
                />
              </Grid>
            </Grid>
            <Grid sm={9}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, width: 300 }}
              >
                SignIn
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item sm={10}>
                Already have an account?
                <Link href="/">
                  <a>Login</a>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mb: 2 }} />
      </ThemeProvider>
    </Typography>
  );
}
