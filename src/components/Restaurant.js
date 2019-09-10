
import React from 'react'

const Restaurant = ({restaurant, index}) => {
  return (
    <div>
      <li key={index}>{restaurant.name} - {restaurant.location}</li>
    </div>
  )
}


export default Restaurant
