import React from 'react';
import portfolioLogo from '@logos/Logo-portfolio.svg';
import githubLogo from '@logos/github.svg';
import linkedinLogo from '@logos/linkedin.svg';
import '@styles/Header.scss';

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-logo">
                    <img src={portfolioLogo} alt="Porfolio Logo"/>
                </div>
                <div className="menu-movile" id="menuContainer">
                    <div className="menu-movile-container" id="menu">
                        <div className="line-1 "></div>
                        <div className="line-2 "></div>
                        <div className="line-3 last "></div>
                    </div>
                    <div>

                    </div>
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