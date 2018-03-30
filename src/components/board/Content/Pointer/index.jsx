import React, { Component } from 'react';
import './styles.scss';

export default class Pointer extends Component {

    render() {
        const { toggle, isOpen } = this.props;
        const openStatus = isOpen
        ? "pointer__arrow pointer--up"
        : "pointer__arrow pointer--down";
        return (
            <div className="pointer post__pointer"  onClick={() => toggle()}>
                <div className={openStatus}></div>
            </div>
        )
    }
}
