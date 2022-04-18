import { Grid, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Blog from "../components/Body/Blog";
import Content from "../components/Body/Content";
import Header from "../components/Body/Header";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/NavBar";

const Home: NextPage = () => {
  return (
    <Grid>
      <NavBar />
      <Header />
      <Content />
      <Blog />
      <Footer />
     
    </Grid>
  );
};

export default Home;
