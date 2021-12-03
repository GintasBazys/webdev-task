import React from "react";
import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";
import GetStarted from "./sections/GetStarted";
import { Faq } from "./sections/FAQ";
import { Box } from "components";
import { lightGreenBackground } from "styles/colors";

const Landing = () => {
  return (
    <>
      <Box background={lightGreenBackground}>
        <Navbar />
        <GetStarted />
      </Box>
      <Faq />
      <Footer />
    </>
  );
};

export default Landing;
