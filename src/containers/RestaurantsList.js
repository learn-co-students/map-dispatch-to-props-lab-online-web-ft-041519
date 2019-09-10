import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant'

class RestaurantsList extends Component {

  render() {
  let restaurantsList = this.props.restaurants.map((restaurant, index) =>  <Restaurant restaurant={restaurant} index={index} /> )

    return (
      <div>
        <h2>Restaurants</h2>
        <ul>
          {restaurantsList}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

//
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   };
// };

export default connect(mapStateToProps)(RestaurantsList);
//
// export default connect(mapStateToProps)(Restaurants);
