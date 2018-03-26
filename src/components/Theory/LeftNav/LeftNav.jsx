import React from 'react';
import ReactTooltip from 'react-tooltip';
import './style.scss';

const LeftNav = ({numb, contentTitle}) => (
    
        <div>
            <a href="#" data-tip={contentTitle} className="m-left-nav__link"> {numb} </a>
            <ReactTooltip className='extraClass' place="left" effect="solid"/>              
        </div>

);
   
export default LeftNav;