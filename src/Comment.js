import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li>
    <a href={'#'} onClick={() => removeComment(id)}>X</a> {text} <span>votes: {votes}</span> <button onClick={() => thumbUpComment(id)}>Thumb up</button> <button onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>;

export default Comment;
