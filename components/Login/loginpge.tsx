import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            Copyright ©
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>
            {new Date().getFullYear()}
            .
        </Typography>
    );
}

const theme = createTheme();

export default function LoginPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
        });
    };

    return (
        <Typography >
            <ThemeProvider theme={theme}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 4
                    }}
                >
                    <Typography >
                        <Avatar sx={{ m: 1 }} >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            LogIn
                        </Typography>
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>


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
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="confrom details"
                                />
                            </Grid>
                        </Grid>
                        <Grid sm={9}>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 2, marginLeft: 4 }}
                            >
                                LogIn
                            </Button>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item sm={10}>
                                Dont have an account?
                                <Link href="/" variant="body2">
                                    <a >SignUp</a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mb: 2 }} />

            </ThemeProvider >
        </Typography >
    );
}