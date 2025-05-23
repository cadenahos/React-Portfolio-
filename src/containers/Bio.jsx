import React from "react";
import Typewriter from "typewriter-effect";
import "@styles/Bio.scss";

const Bio = () => {
  return (
    <section className="bio">
      <div className="home-section-title">
        <h3>About</h3>
        <div></div>
      </div>
      <div className="bio-container">
        <div className="bio-description">
          <div className="bio-hello">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer ")
                  .callFunction(() => {})
                  .pauseFor(500)
                  .start(500);
              }}
            />
          </div>
          <p>
            Looking for new challenges. Working with react, .net and node.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
