import React from 'react';
import Theme from '../Theme';
import ButtonAdd from '../ButtonAdd';
import './styles.scss';


const themes = ['[Тема 1_]','[Тема 2_]','[Тема 3_]'];

const ThemeBlock = () => {
  return (
      <ul className="c-accordion-menu__submenu">
        {themes.map(item => <Theme key={item} theme={item} />)}
        <ButtonAdd />
      </ul>
  );
};

export default ThemeBlock;