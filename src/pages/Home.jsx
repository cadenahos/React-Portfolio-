import React from 'react';
import '@styles/Home.scss';

const Home = () => {
    return (
        <>
            
        <section className="bio">
            <h3 className="bio-title">BIO</h3>
            <p className="bio-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, architecto. Minima culpa illo praesentium
                qui delectus temporibus rem quidem modi aliquam impedit, repudiandae, sequi blanditiis eos sit dolorum
                nostrum repellendus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus fugiat at expedita ab
                praesentium sequi, tempore quam voluptate quaerat ratione eveniet non, architecto dolorum ex blanditiis
                molestias, consequuntur voluptatem.
            </p>
            <button className="button--primary">More info ...</button>
        </section>
        <section className="projects">
            <h3>PROJECTS</h3>
            <article className="projects-container ">
                <div className="card">
                    <div className="card-presentation card-presentation--project">
                        <h4 className="card-presentation--title">Cultural Magazine</h4>
                        <img src="./magazine.jpg" alt="magazine" />
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src="./java-script.svg" alt=""/>
                                <img src="./nodejs.svg" alt="" />
                                <img src="./css.svg" alt="" />
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
                        <img src="./magazine.jpg" alt="magazine"/>
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src="./java-script.svg" alt=""/>
                                <img src="./nodejs.svg" alt=""/>
                                <img src="./css.svg" alt=""/>
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
            <h3>ORGANIZATIONS</h3>
            <article className=" organizations-container ">
                <div className="card">
                    <div className="card-presentation card-presentation--project">
                        <h4 className="card-presentation--title">Cultural Magazine</h4>
                        <img src="./magazine.jpg" alt="magazine"/>
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src="./java-script.svg" alt=""/>
                                <img src="./nodejs.svg" alt=""/>
                                <img src="./css.svg" alt=""/>
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
                        <img src="./magazine.jpg" alt="magazine" />
                        <div className="card-presentation--project--lenguages">
                            <h4>Languages</h4>
                            <div className="card-presentation--project--lenguages--icons">
                                <img src="./java-script.svg" alt=""/>
                                <img src="./nodejs.svg" alt=""/>
                                <img src="./css.svg" alt=""/>
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