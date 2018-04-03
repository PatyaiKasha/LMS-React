import React from 'react';
import ThemeContent from '../ThemeContent';
import './styles.scss';

const Theme = ({theme}) => {
  return (
      <li className="c-accordion-menu__submenu-block">
        <input type="checkbox" name={theme} id={theme} />
        <label htmlFor={theme} className="c-accordion-menu__submenu-button">{theme}
          <div className="admin-editor__instruments"></div>
          <div className="c-notifications c-notifications-hidden-theme">{theme}</div>
        </label>
        <ThemeContent />
      </li>

  );
};

export default Theme;
