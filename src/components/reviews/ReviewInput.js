import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }
  
  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ""})
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { text } = this.state
    return (
      <div>
         <form onSubmit={handleSubmit}>
          <label>Add a Review: </label>
          <input type="text" onChange={handleChange} value={text}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
