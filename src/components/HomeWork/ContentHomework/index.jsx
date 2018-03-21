import React from 'react';
import './styles.scss';

export default class  ContentMain extends React.Component {
    render() {
        const {textq} = this.props;
        return (
          <div id="m-title" className="m-header">
              <div className="m-header__caption caption">
                  <h2 className="caption__title">{textq}</h2>
            
              </div>
              
          </div>
      );
      }
  }