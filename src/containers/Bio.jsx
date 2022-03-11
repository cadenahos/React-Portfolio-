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
    );
};

export default Bio;