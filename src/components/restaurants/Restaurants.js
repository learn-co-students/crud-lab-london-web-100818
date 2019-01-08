import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props
    return(
      <ul>
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>)}
      </ul>
    );
  }
};

export default Restaurants;