import React from 'react';

import './styles.scss';

const Content = ({contentTitle, contentText}) =>( 
    <dl className="m-content">
        <h4 className="m-content__content-title">[{ contentTitle}_]</h4>
        <p className="m-content__text">{contentText}</p>
        
         {/* <a href="#m-title" className="m-btn-up invisible">
                </a> */}
    </dl>

    );


export default Content;