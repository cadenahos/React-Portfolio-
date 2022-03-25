import React, { useState } from 'react';
import '@styles/MenuMovile.scss';
import Menu from './Menu';
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals';


const MenuMovile = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const MenuToogle = ()=>{
        setMenuToggle((prevState)=>!prevState);
    }

    return (
        <div className={`menu-movile ${menuToggle && 'menu-movile-active'}`} >
            <div className={`menu-movile-container ${menuToggle && 'menu-movile-container-active'}`} onClick={MenuToogle}>
                <div className="line-1 "></div>
                <div className="line-2 "></div>
                <div className="line-3 last "></div>
            </div>
            <div>
                {menuToggle && <Menu movile={menuToggle}/>}
            </div>
        </div>
    );
};

export default MenuMovile;