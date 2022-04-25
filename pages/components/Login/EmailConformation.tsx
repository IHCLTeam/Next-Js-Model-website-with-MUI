import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Image from "next/image";
import imageLoader from "../../ImageLoader"


export default function EmailConformation() {
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
          <Typography  variant="h5"  sx={{ marginLeft: "35%", marginBottom: "1%", marginTop: "4%" }}>
          Next, check your email
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "35%", marginBottom: "2%" }}>
          We sent an email to aad'. Please follow the instructions to reset your password
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "35%", marginBottom: "2%" }}>
          Typed in the wrong email?
          <Link href='\components\Login\ForgotPassword'>
          Go back and update.
          </Link>
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "35%", marginBottom: "2%" }}>
          Haven’t received the email yet? 
          <Link>
          Resend
          </Link>
          </Typography>
      </Grid>
    </Grid>
  )
}
