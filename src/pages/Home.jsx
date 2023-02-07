import React from "react";
import Bio from "@containers/Bio";
import Projects from "@containers/Projects";
import Organizations from "@containers/Organizations";
import "@styles/Home.scss";

const Home = () => {
  return (
    <>
      <Bio />
      <Projects />
    </>
  );
};

export default Home;
