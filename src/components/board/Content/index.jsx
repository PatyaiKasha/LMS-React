import React, { Component } from 'react';
import PostContentHeader from './PostContentHeader/';
import DateStamp from './DateStamp';
import ContentText from './ContentText';
import Counter from './Counter';
import Pointer from './Pointer';
import CommentList from '../CommentList';
import './styles.scss';


export default class Content extends Component {

    state = {
        isOpen: false
    };

    _openComment = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    };

  render() {
      let { id, title, date, time, message, likes, comments} = this.props
      const { isOpen } = this.state;
    return (
      <div className="contents post-contents">
        <PostContentHeader title = {title} />
        <DateStamp date = { date } time = { time } />
        <ContentText text={message} />
        <Counter likes = {likes} comments = {comments} />
        {this.state.isOpen ? <CommentList id={id} /> : null}
          <Pointer toggle={this._openComment} isOpen={isOpen}/>
      </div>
    );
  }
}
