import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor(props) {
    super(props)
  this.state = {
    text: ''
  }
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  
  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input 
          type='text'
          value={this.state.text}
          onChange={(event) => this.handleOnChange(event)}
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
