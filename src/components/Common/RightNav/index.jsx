import React from 'react';
import ReactTooltip from 'react-tooltip';
import './style.scss';
import './main.scss';

export default class RightNav extends React.Component {

  render() {
        return (
            <div className="right-nav">
                <div className="m-right-nav">
                    <a href="#" data-tip="Добавить в избранное _"
                        className="m-right-nav__item m-right-nav__item-favorites">
                    </a>
                    <a href="#" data-tip="Напомнить позже _"
                        className="m-right-nav__item m-right-nav__item-reminder">
                    </a>
                    <a href="#" data-tip="Обсудить на форуме _"
                        className="m-right-nav__item m-right-nav__item-forum">
                    </a>
                    <a href="#" data-tip="Обсудить в чате _"
                        className="m-right-nav__item m-right-nav__item-chat">
                    </a>
                    <a href="#" data-tip="Задать вопрос ментору _"
                        className="m-right-nav__item m-right-nav__item-mentor">
                    </a>
                    <a href="#" data-tip="Выделить текст _"
                        className="m-right-nav__item m-right-nav__item-select">
                    </a>
                        <ReactTooltip class='extraClass' place="left" effect="solid"/>
                </div>
            </div>
        );
    }
}