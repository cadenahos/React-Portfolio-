import React from "react";
import Typewriter from "typewriter-effect";
import "@styles/Languages.scss";

const Languages = () => {
  React.useEffect(() => {}, []);
  return (
    <section className="lang">
      <div className="home-section-title">
        <h3>Programing Lenguages</h3>
        <div></div>
      </div>
      <div className="languages-container">
        <div className="languges"></div>
        <div className="languges"></div>
        <div className="languges"></div>
      </div>
    </section>
  );
};

export default Languages;
