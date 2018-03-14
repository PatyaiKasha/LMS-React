import React from 'react';
import './styles.scss';

export default class  HeaderMain extends React.Component {
  render() {
      const {module, themNum, themTitle, time} = this.props;
      return (
        <div id="m-title" className="m-header">
            <div className="m-header__caption caption">
                <h2 className="caption__title">{module}</h2>
                <h3 className="caption__theme">ТЕМА {themNum}</h3>
            </div>
            <h2 className="m-header__title" id="theory-name">
                [ {themTitle} _] 
            </h2>
            <div id="m-timers">
                <div className="m-timer">
                    <p className="m-timer__time">
                        <span id="m-timer">{time} мин</span>
                        {/* <br> на прочтение </br> */}
                    </p>
                    <div className="m-timer__img icon" id="m-timer__img"></div>
                </div>
                {/* <div>
                    <a href = "javascript:testRender()" className="m-btn-test button-small">к тестам!</a>
                </div> */}
            </div>
        </div>
    );
    }
}
