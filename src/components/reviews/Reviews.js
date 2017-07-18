import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render () {
    return (
      <ul>
        {this.props.store.getState().reviews.filter(review => {
          return review.restaurantId === this.props.restaurantId
        }).map((review, index) => {
          return <Review store={this.props.store} review={review} key={index} />
        })}
      </ul>
    )
  }
}

export default Reviews
