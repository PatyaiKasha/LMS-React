import React from 'react';
import ThemeContent from '../ThemeContent';
import './styles.scss';

const Theme = ({theme}) => {
  return (
      <li className="c-accordion-menu__submenu-block">
        <input type="checkbox" name="tech-skills-theme-1" id="tech-skills-theme-1" />
        <label htmlFor="tech-skills-theme-1" className="c-accordion-menu__submenu-button">{theme}
          <div className="admin-editor__instruments"></div>
          <div className="c-notifications c-notifications-hidden-theme">{theme}</div>
        </label>
        <ThemeContent />
      </li>

  );
};

export default Theme;
