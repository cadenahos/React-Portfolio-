import React from "react";
import fotoperfil from "@images/perfilcentrado.jpeg";
import Typewriter from "typewriter-effect";
import "@styles/Bio.scss";

const Bio = () => {
  React.useEffect(() => {}, []);
  return (
    <section className="bio">
      <div className="home-section-title">
        <h3>biography</h3>
        <div></div>
      </div>
      <div className="bio-container">
        {/* <img className="bio-fotoPerfil" src={fotoperfil} alt="foto perfil"/> */}
        <div className="bio-description">
          <div className="bio-hello">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Front-end Developer. Nonconformist")
                  .callFunction(() => {})
                  .pauseFor(500)
                  .start(500);
              }}
            />
          </div>
          <p>
            I am the type of person who feel free working with modern
            technology.
          </p>
        </div>
      </div>
      {/* <button className="button--primary">More info ...</button> */}
    </section>
  );
};

export default Bio;
