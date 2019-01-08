import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  deleteReview = (id) => {
    this.props.deleteReview({
      restaurantId: this.props.restaurant.id,
      reviewId: id
    })
  } 

  render() {
    const { addReview, restaurant, reviews } = this.props
    const { deleteReview } = this
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} restaurantId={restaurant.id} deleteReview={deleteReview}/> 
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => {
  return{
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
