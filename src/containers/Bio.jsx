import React from 'react';
import fotoperfil from '@images/perfilcentrado.jpeg';
import Typewriter from 'typewriter-effect';
import '@styles/Bio.scss';
  

const Bio = () => {

    React.useEffect(()=>{
    },[])
    return (
        <section className="bio">
        <div className="home-section-title" >
            <h3 >biography</h3>
            <div></div>
        </div>
        <div className="bio-container">
            {/* <img className="bio-fotoPerfil" src={fotoperfil} alt="foto perfil"/> */}
            <div className="bio-description">
            <div className='bio-hello'>

                <Typewriter 
  onInit={(typewriter) => {
    typewriter.typeString('Under construction!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
            </div>
                <p>                  
                    I am the type of person who feel happy working with modern technology. 
                    <br></br>
                    <br></br>
                    
                    I love to work in graphic interfaces and approach new ways of solving problems.
                    <br></br>
                    <br></br>
                    </p>
                {/* <button className="button--primary">More info ...</button> */}
            </div>
        </div>       
        </section>
    );
};

export default Bio;