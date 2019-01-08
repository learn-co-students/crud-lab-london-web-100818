import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    const { restaurant } = this.props;
    const { handleClick } = this
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
