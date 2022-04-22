import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, styled, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import imageLoader from "../../ImageLoader";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function Copyright(props: any) {
  return (
    <Box>
      <Grid>
        <Item sx={{ textAlign: "center", boxShadow: "none", borderTop: 1 }}>
          * By logging in, you agree to our Terms of Use and to receive our
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

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
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
        <Avatar sx={{ m: 4 }}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Grid>
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginTop: "2%", marginLeft: 97, marginBottom: "1%" }}
          >
            LogIn
          </Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sm={2}
            sx={{ marginLeft: "40%", marginBottom: "1%" }}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid item sm={2} sx={{ marginLeft: "40%" }}>
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
          <Grid item sm={8} sx={{ marginBottom: "1%", marginLeft: "40%" }}>
            <Link href="/" sx={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Grid>
        </Grid>

        <Grid sm={9}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 1, width: 310, marginLeft: 97 }}
          >
            LogIn
          </Button>
        </Grid>
        <Grid
          item
          sm={10}
          sx={{
            display: "Flex",
            marginLeft: 97,
            marginBottom: "12%",
            fontSize: 20,
          }}
        >
          Dont have an account?
          <Link
            href="\components\Registration\registration"
            variant="body2"
            sx={{ fontSize: 20 }}
          >
            Sign In
          </Link>
        </Grid>
      </Box>
      <Copyright />
    </Grid>
  );
}
