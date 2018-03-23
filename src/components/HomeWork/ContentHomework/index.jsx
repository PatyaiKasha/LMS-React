import React from 'react';
import './styles.scss';

export default class  ContentMain extends React.Component {
    render() {
        const {textq} = this.props;
        return (
          <div id="ContentHomework">
              
                  <p className="ContentHomework">{textq}</p>
            
 
          </div>
      );
      }
  }