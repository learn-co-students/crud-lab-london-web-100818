import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }

  render() {
    const { handleChange, handleSubmit } = this 
    const { text } = this.state
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a Restaurant: </label>
          <input type="text" onChange={handleChange} value={text}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
