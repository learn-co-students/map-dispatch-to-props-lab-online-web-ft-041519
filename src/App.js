import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import RestaurantsList from './containers/RestaurantsList';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <RestaurantsList />
      </div>
    );
  }
};

export default App;
