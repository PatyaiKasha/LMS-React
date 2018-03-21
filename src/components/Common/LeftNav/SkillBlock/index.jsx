import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

import SkillItem from '../SkillItem';

const skillItem = ['tech skills', 'soft skills', 'english'];

const SkillBlock = () => {
  return (
    <ul className="c-accordion-menu">
      {skillItem.map(item => <SkillItem key={item} skill={item}/>)}
    </ul>
  );
};

export default SkillBlock;
