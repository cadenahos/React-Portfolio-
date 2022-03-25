import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/Menu.scss';

const Menu = (props) => {
    let activeStyle = {
        color: "blue",
        
    };
    return ( 
            <ul className={(props.movile === true) ? 'nav-movile':'nav'}>
                <li>
                    <NavLink 
                        to='/'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact-us'
                    >Contact me
                    </NavLink>
                </li>
                {/* <li><NavLink to='/blog'>Blog</NavLink></li> */}
            </ul>
    );
};

export default Menu;