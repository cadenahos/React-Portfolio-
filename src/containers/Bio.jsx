import React from 'react';
import fotoperfil from '@images/perfilcentrado.jpeg';
import '@styles/Bio.scss';

const Bio = () => {
    return (
        <section className="bio">
        <div className="home-section-title" >
            <h3 >biography</h3>
            <div></div>
        </div>
        <div className="bio-container">
            <img className="bio-fotoPerfil" src={fotoperfil} alt="foto perfil"/>
            <div className="bio-description">
                <p>                  
                    I am the type of person who feel happy working with modern technology. I love to work in graphic interfaces and approach new ways of solving problems.
                    I consider myself an avid learner who enjoy reading technical blogs and books in subject that I am interested as, frontend, algorithms, and Management methodologies.
                </p>
                <button className="button--primary">More info ...</button>
            </div>
        </div>       
        </section>
    );
};

export default Bio;