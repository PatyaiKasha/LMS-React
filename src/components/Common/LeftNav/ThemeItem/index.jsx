import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

const ThemeItem = ({ link, module, text }) => {
  return (
    <li className="c-accordion-menu__submenu-item"
    >
      <NavLink
        exact
        data={module}
        to={link}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default ThemeItem;

