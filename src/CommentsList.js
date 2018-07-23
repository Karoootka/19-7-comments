import React, { Component } from 'react';
import Comment from './CommentContainer';
import CommentForm from './CommentForm';

const CommentsList = ({comments, addComment}) =>
  <div>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    <CommentForm addComment={text => addComment(text)}/>
  </div>;

export default CommentsList;
