import React from 'react';
import items from '../themeContentDB';
import ThemeItem from '../ThemeItem';
import './styles.scss';

const ThemeContent = () => {
  return (
    <ul className="c-accordion-menu__submenu">
      {items.map(item => <ThemeItem key={item.module} {...item} />)}
    </ul>
  );
};

export default ThemeContent;

