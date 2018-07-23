import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({
      text: ''
    });
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          onChange={e => this.changeHandler(e)}
          value={this.state.text}
          minLength={3}
          required='required'
          placeholder='Comment'
        />
        <button type={'submit'}>Add</button>
      </form>
    );
  }
}

export default CommentForm;
