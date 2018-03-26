import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavBarTooltip from "@/components/Common/Header/NavBarTooltip";
import NavBarNotification from '@/components/Common/Header/NavBarNotification';
import items from "../navBarItems";
import './styles.scss';

const navBarItems = items.map(item => (
    <NavLink
        key={item.module}
        exact
        className="NavBar__icon"
        to={item.link}
    >
    {<div className={`NavBar__icon NavBar__icon-${item.module}`}>
        <NavBarTooltip key={item.module} events={item.events} />
        {/* <span className=NavBar__tooltip">{item.events}</span> */}
    </div>}
    </NavLink>
));

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                {navBarItems}
                {this.props.children}
            </div>
        );
    }
}

// NavBar.propTypes = {

// };