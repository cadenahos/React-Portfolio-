import React from "react";
import Bio from "@containers/Bio";
import Projects from "@containers/Projects";
import Languages from "@containers/Languages";
import Organizations from "@containers/Organizations";
import "@styles/Home.scss";

const Home = () => {
  return (
    <>
      <Bio />
      <Languages />
      <Projects />
    </>
  );
};

export default Home;
