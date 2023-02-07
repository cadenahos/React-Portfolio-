import React from "react";
import { NavLink } from "react-router-dom";
import "@styles/Menu.scss";
import { menuProps } from "../Models/menuProps";

const Menu = (props) => {
  return (
    <ul className={props.movile === true ? "nav-movile" : "nav"}>
      {menuProps.map((item) => (
        <li>
          <NavLink to={item.to} key={item.to}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
