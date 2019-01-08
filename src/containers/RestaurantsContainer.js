import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    const { addRestaurant, restaurants, deleteRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', restaurant}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
