import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions.js'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
