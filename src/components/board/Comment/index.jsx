import React, { Component } from 'react';
import User from '@/components/board/user';
import CommentContent from '@/components/board/Comment/CommentContent';
import DateStamp from '@/components/board/Content/DateStamp';
import Control from '@/components/board/Content/PostContentHeader/control';
import ContentText from '@/components/board/Content/ContentText';
import LikesIcon from '@/components/board/Content/LikesIcon';
import pensil from '@/components/board/pensil.png';
import './style.scss'

class Comment extends Component {

render() {
    // const { userName, userRole, likes, date, time, message } = this.props;
    const { userName, userRole, ...props } = this.props;
    return (
        <div className="Comment">
            <User name={userName} role={userRole}/>
            <CommentContent {...props}/>
        </div>);
    }
}

export default Comment;
