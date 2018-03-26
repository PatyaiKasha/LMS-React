import React from 'react';
import ReactTooltip from 'react-tooltip';
import './style.scss';

const LeftNav = ({numb, contentTitle}) => (
    <div className="m-left-nav">
        <dl className="m-left-nav__margin">
            <a href="#" data-tip={contentTitle} className="m-left-nav__link"> {numb} </a>
            <ReactTooltip className='extraClass' place="left" effect="solid"/>              
        </dl>
    </div>
);
   
export default LeftNav;