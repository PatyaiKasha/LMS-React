import React from 'react';

import './styles.scss';

export default class Content extends
React.Component {

    render() {
        const { content, text}= this.props;
        return (
            <dl className="m-content">
                <h4 className="m-content__content-title">[{ content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>
                // <p className="m-content__text">text</p>
                <h4 className="m-content__content-title">[ {content}_]</h4>
                <p className="m-content__text">{text}</p>

                <a href="#m-title" class="m-btn-up invisible">
                    
                </a>
            </dl>
        )
    }
}
