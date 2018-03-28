import React from 'react';
import SkillItem from '../SkillItem';
import './styles.scss';

const skillItem = ['tech skills', 'soft skills', 'english'];

const SkillBlock = () => {
  return (
    <ul className="c-accordion-menu">
      {skillItem.map(item => <SkillItem key={item} skill={item}/>)}
    </ul>
  );
};

export default SkillBlock;
