import React from 'react';
import '@styles/Projects.scss';
import mookImage from '@images/magazine.jpg';
import javascriptLogo from '@logos/java-script.svg';
import nodeLogo from '@logos/nodejs.svg';
import cssLogo from '@logos/css.svg';

const Projects = () => {
    return (
        <section className="projects">
        <div className="home-section-title" >
            <h3 >projects</h3>
            <div></div>
        </div>
            <article className="projects-container ">
                <div className="card">
                    <div className="card-presentation card-presentation--project">
                        <h4 className="card-presentation--title">Cultural Magazine</h4>
                        <img src={mookImage} alt="magazine" />
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src={javascriptLogo} alt=""/>
                                <img src={nodeLogo} alt="" />
                                <img src={cssLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis
                            quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum
                            accusantium ea eveniet?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum
                            officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur
                            voluptates unde ut at?
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-presentation card-presentation--project">
                        <h4 className="card-presentation--title">Cultural Magazine</h4>
                        <img src={mookImage} alt="magazine" />
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src={javascriptLogo} alt=""/>
                                <img src={nodeLogo} alt="" />
                                <img src={cssLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis
                            quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum
                            accusantium ea eveniet?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum
                            officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur
                            voluptates unde ut at?
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-presentation card-presentation--project">
                        <h4 className="card-presentation--title">Cultural Magazine</h4>
                        <img src={mookImage} alt="magazine" />
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src={javascriptLogo} alt=""/>
                                <img src={nodeLogo} alt="" />
                                <img src={cssLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis
                            quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum
                            accusantium ea eveniet?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum
                            officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur
                            voluptates unde ut at?
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Projects;