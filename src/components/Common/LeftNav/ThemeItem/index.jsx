import React from 'react';
import './styles.scss';
import {NavLink} from 'react-router-dom';

const ThemeItem = ({link, module, text}) => {
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

