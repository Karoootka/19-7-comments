import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions.js';


// mapStateToProps funkcja na wejściu przyjmuje stan aplikacji, a na wyjściu zwraca obiekt
// podpinający konkretne wartości propsów do komponentu CommentsList

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
