import React from "react";
import "@styles/Card.scss";
import mookImage from "@images/magazine.jpg";
import javascriptLogo from "@logos/java-script.svg";
import nodeLogo from "@logos/nodejs.svg";
import cssLogo from "@logos/css.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="card-presentation card-presentation--project">
        <a href="https://cadenahos.github.io/todo-machine/" target="_blank">
          <h4 className="card-presentation--title">Cultural Magazine</h4>
          <img
            className="card-presentation-img"
            src={mookImage}
            alt="magazine"
          />
        </a>
        <div className="card-presentation--project--lenguages">
          <h4>Languages</h4>
          <div className="card-presentation--project--lenguages--icons">
            <img src={javascriptLogo} alt="" />
            <img src={nodeLogo} alt="" />
            <img src={cssLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="card-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe
          quas eligendi, officiis quae amet culpa fugit ex aliquid deleniti rem
          ipsam soluta commodi qui nulla harum accusantium ea eveniet? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel
          amet hic! A dolorum officia aperiam veniam. Qui tenetur magni
          doloremque officia veniam facere pariatur voluptates unde ut at?
        </p>
      </div>
    </div>
  );
};

const CardForm = () => {
  return (
    <div className="contact card card--form">
      <div className="contact-tittle">
        <h3>Write me </h3>
      </div>
      <div>
        <form>
          <div>
            <label>
              <span></span>
              company/person
            </label>
            <input />
          </div>
          <div>
            <label>
              <span></span>
              email
            </label>
            <input />
          </div>
          <div>
            <label>
              <span></span>
              description
            </label>
            <textarea></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Card, CardForm };
