import { Grid,Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactModal from "../modalpops/modalpop3";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://s26352.pcdn.co/wp-content/uploads/2022/03/Homepage-Promo-Support-sm.jpg"})`,
    height: 600,
    outerWidth: 100,
  },
};
export default function Blog() {
  return (
    <Box style={styles.paperContainer}>
      .
      <Grid
        sx={{
          padding: "80px",
          backgroundColor: "#000000cc",
          width: "50%",
          color: "white",
          textAlign: "center",
          marginTop: "8%",
          marginLeft: "25%",
        }}
        top={100}
      >
        <Typography variant="h4">HELP LIBRARY</Typography>
        <Typography>
          Master IT software with our expansive collection of documentation,
          tutorials and training videos
        </Typography>
        {/* <Link href="/components/contact">Contact Us</Link> */}
        <ContactModal/>
      </Grid>
    </Box>
  );
}

