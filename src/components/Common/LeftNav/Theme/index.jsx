import React from 'react';
import './styles.scss';

const Theme = ({theme}) => {
  return (


      <li className="c-accordion-menu__submenu-block">
        <input type="checkbox" name="tech-skills-theme-1" id="tech-skills-theme-1"/>
        <label htmlFor="tech-skills-theme-1" className="c-accordion-menu__submenu-button">{theme}

          <div className="admin-editor__instruments"></div>
          <div className="c-notifications c-notifications-hidden-theme">{theme}</div>
        </label>
        {/*<ul className="c-accordion-menu__submenu">*/}
        {/*{items.map(item => (*/}
        {/*<li className="c-accordion-menu__submenu-item"*/}
        {/*key={item.module}*/}
        {/*>*/}
        {/*<NavLink*/}
        {/*exact*/}
        {/*data={item.module}*/}
        {/*to={item.link}*/}
        {/*>*/}
        {/*{item.text}*/}
        {/*</NavLink>*/}
        {/*</li>*/}
        {/*))}*/}
        {/*</ul>*/}
      </li>

  );
};

export default Theme;
