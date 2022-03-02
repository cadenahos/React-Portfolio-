import React from 'react';
import '@styles/Header.scss';

const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-logo">
                    <img src="./Logo-portfolio.svg"></img>
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
                            <img src="./github.svg" alt=""/>
                            <h3>Github</h3>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <img src="./linkedin.svg" alt=""/>
                            <h3>linkedin</h3>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};


export default Header;