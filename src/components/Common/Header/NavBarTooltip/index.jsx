import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import items from "../navBarItems";
import './styles.scss';
    

export default class NavBarTooltip extends React.Component {
    static PropTypes = {
        key: PropTypes.string.isRequired,
        events: PropTypes.string.isRequired, 
    };

    render() {
        const { key, events } = this.props;
        return <span className="NavBar__tooltip" {...key}>{events}</span>;
        
    }
}