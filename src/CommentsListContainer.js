import {connect} from 'react-redux';
import CommentsList from './CommentsList';


// mapStateToProps funkcja na wejściu przyjmuje stan aplikacji, a na wyjściu zwraca obiekt
// podpinający konkretne wartości propsów do komponentu CommentsList

const mapStateToProps = state => ({
  comments: state.comments
});


export default connect(mapStateToProps)(CommentsList);
