import React from 'react';
import ReactDOM from 'react-dom';
class Recipes extends React.Component {
  render() {
    return (
      <h1>Recipe {this.state.recipe} </h1>
    )
  }
}

export default Recipes;