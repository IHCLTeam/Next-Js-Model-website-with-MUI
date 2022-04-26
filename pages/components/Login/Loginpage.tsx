import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import imageLoader from "../../ImageLoader";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: 300,
  textAlign: "center",
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

const theme = createTheme();

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid>
      <Typography>
        <Link href="/">
          <Button>
            <Image
              loader={imageLoader}
              src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </Button>
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledPaper>
          <Avatar sx={{ my: 4, mx: "auto" }}>
            <LockOutlinedIcon />
          </Avatar>
        </StyledPaper>
      </Box>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <StyledPaper sx={{ my: 1, mx: "auto" }}>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
        </StyledPaper>

        <StyledPaper sx={{ my: 2, mx: "auto" }}>
          <StyledPaper sx={{ my: 3, mx: "auto" }}>
            <TextField
              sx={{ width: 310 }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </StyledPaper>

          <StyledPaper sx={{ my: 1, mx: "auto" }}>
            <TextField
              sx={{ width: 310 }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </StyledPaper>
          <StyledPaper sx={{ my: 1, mx: "auto" }}>
            <Link
              href="/components/Login/ForgotPassword"
              sx={{ textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
          </StyledPaper>
        </StyledPaper>

        <StyledPaper sx={{ my: 1, mx: "auto" }}>
          <Button type="submit" variant="contained" sx={{ width: 300 }}>
            LogIn
          </Button>
        </StyledPaper>
        <StyledPaper
          sx={{
            fontSize: 20,
            my: 2,
            mx: "auto",
          }}
        >
          Dont have an account?
          <Link
            href="/components/Registration/registration"
            variant="body2"
            sx={{ fontSize: 18 }}
          >
            Sign In
          </Link>
        </StyledPaper>
      </Box>
      <Copyright />
    </Grid>
  );
}
