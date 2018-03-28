import React from 'react';
// import {NavLink} from 'react-router-dom';
import ThemeBlock from '../ThemeBlock';
import './styles.scss';

const SkillItem = ({skill}) => {
  return (
    <div>
      <li className="c-accordion-menu__block">
        <input type="checkbox" name="tech-skills" id="tech-skills"/>
        <label htmlFor="tech-skills" className="c-accordion-menu__button">{skill}</label>
        <ThemeBlock />
      </li>
    </div>
  );
};

export default SkillItem;

