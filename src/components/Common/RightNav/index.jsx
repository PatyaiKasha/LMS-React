import React from 'react';
import './style.scss';
import './main.scss';

export default class RightNav extends React.Component {
  render() {
        return (
            <div className="right-nav">
                <div className="m-right-nav">
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-favorites">
                    </a>
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-reminder">
                    </a>
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-forum">
                    </a>
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-chat">
                    </a> 
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-mentor">
                    </a>
                    <a href="#"
                        className="m-right-nav__item m-right-nav__item-select">
                    </a>
                </div>
            </div>
        );
    }
}