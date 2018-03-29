import React, { Component } from 'react';
import Comment from '../Comment'

export default class CommentList extends Component {

    state = {
        comments: []
    }

    componentWillMount() {
        fetch("http://localhost:3000/comments")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Error while fetching' + response.statusText)
            }
        }).then(data => {
            this.setState({comments: data})
        }).catch(err => console.error(err))
    }
    render() {
        const {id} = this.props;
        return (
            <div className="CommentList">
                {
                    this.state.comments
                    .filter(item => id === item.postID)
                    .map(item => <Comment {...item} key={item.id}/>)
                }
            </div>
        )
    }
}
