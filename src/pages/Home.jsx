import React from 'react';
import '@styles/Home.scss';
import fotoperfil from '@images/perfilcentrado.jpeg';
import mookImage from '@images/magazine.jpg';
import javascriptLogo from '@logos/java-script.svg';
import nodeLogo from '@logos/nodejs.svg';
import cssLogo from '@logos/css.svg';
const Home = () => {
    return (
        <>
            
        <section className="bio">
        <div className="home-section-title" >
            <h3 >biography</h3>
            <div></div>
        </div>
        <div className="bio-container">
            <img className="bio-fotoPerfil" src={fotoperfil} alt="foto perfil"/>
            <div className="bio-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, architecto. Minima culpa illo praesentium
                    qui delectus temporibus rem quidem modi aliquam impedit, repudiandae, sequi blanditiis eos sit dolorum
                    nostrum repellendus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus fugiat at expedita ab
                    praesentium sequi, tempore quam voluptate quaerat ratione eveniet non, architecto dolorum ex blanditiis
                    molestias, consequuntur voluptatem.
                </p>
                <button className="button--primary">More info ...</button>
            </div>
        </div>       
        </section>
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
        <section className="organizations">
        <div className="home-section-title" >
            <h3 >ORGANIZATIONS</h3>
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
        </>
    );
};

export default Home;