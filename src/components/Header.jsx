import React from 'react';
import MenuMovile from './MenuMovile';
import Menu from './Menu';
import useMediaQuery from '@hooks/UseMediaQuery';
import portfolioLogo from '@logos/Logo-portfolio.svg';
import githubLogo from '@logos/github.svg';
import linkedinLogo from '@logos/linkedin.svg';
import '@styles/Header.scss';

const Header = () => {

    const isDesktop = useMediaQuery('(min-width: 920px)');
    return (
        <header>
            <div className="menu">
                <div className="menu-logo">
                    <img src={portfolioLogo} alt="Porfolio Logo"/>
                </div>
                <div className='menu-nav'>
                    {isDesktop ? <Menu/> : <MenuMovile/>}
                </div>
                <div className="menu-pages">
                    <a href="">
                        <div>
                            <img src={githubLogo} alt="Github"/>
                            <h3>Github</h3>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <img src={linkedinLogo} alt=""/>
                            <h3>linkedin</h3>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};


export default Header;