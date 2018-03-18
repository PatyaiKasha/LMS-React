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
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                    <a href="#" data-tip="Напомнить позже _"
                        className="m-right-nav__item m-right-nav__item-reminder">
                    </a>
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                    <a href="#" data-tip="Обсудить на форуме _"
                        className="m-right-nav__item m-right-nav__item-forum">
                    </a>
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                    <a href="#" data-tip="Обсудить в чате _"
                        className="m-right-nav__item m-right-nav__item-chat">
                    </a>
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                    <a href="#" data-tip="Задать вопрос ментору _"
                        className="m-right-nav__item m-right-nav__item-mentor">
                    </a>
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                    <a href="#" data-tip="Выделить текст _"
                        className="m-right-nav__item m-right-nav__item-select">
                    </a>
                        <ReactTooltip place="left" type="warning" effect="solid"/>
                </div>
            </div>
        );
    }
}