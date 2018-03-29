import React, { Component } from 'react';
import Dateheader from '@/components/board/Content/DateStamp';
import Controlicon from '@/components/board/Content/PostContentHeader/control';
import Content from '@/components/board/Content/ContentText';
import Like from '@/components/board/Content/LikesIcon';
import './style.scss'


class CommentContent extends Component {

    render() {
        const {date, time, message, likes} = this.props;
        return (
            <div className="Comment__contents">
                <div className="Comment__header">
                    <Dateheader date={date} time={time}/>
                    <Controlicon />
                </div>
                <Content text={message}/>
                <Like likes={likes}/>
            </div>
        );
    }
}

export default CommentContent;
