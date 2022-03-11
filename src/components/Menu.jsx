import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return ( 
            <ul className='nav'>
                <li><a>Home</a></li>
                <li><a>Contact me</a></li>
                <li><a>Blog</a></li>
            </ul>
    );
};

export default Menu;