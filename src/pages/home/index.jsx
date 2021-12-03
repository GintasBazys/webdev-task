import React from "react";
import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";
import GetStarted from "./sections/GetStarted";
import { Faq } from "./sections/FAQ";
import LeakedPasswords from "./sections/LeakedPasswords";

const Landing = () => {
  return (
    <>
      <Navbar />
      <GetStarted />
      <LeakedPasswords />
      <Faq />
      <Footer />
    </>
  );
};

export default Landing;
