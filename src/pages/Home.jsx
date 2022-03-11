import React from 'react';
import Bio from '@containers/Bio';
import Projects from '@containers/Projects';
import Organizations from '@containers/Organizations';
import '@styles/Home.scss';

import mookImage from '@images/magazine.jpg';
import javascriptLogo from '@logos/java-script.svg';
import nodeLogo from '@logos/nodejs.svg';
import cssLogo from '@logos/css.svg';
const Home = () => {
    return (
        <>
        <Bio/>
        <Projects/>
        <Organizations/>
        </>
    );
};

export default Home;