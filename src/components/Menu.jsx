import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return ( 
            <ul className='nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='/contact-us'>Contact me</a></li>
                <li><a href='/blog'>Blog</a></li>
            </ul>
    );
};

export default Menu;