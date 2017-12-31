import React from 'react';
import PropTypes from 'prop-types';

class Cuisine extends React.Component {
    constructor(){
      super();

      this.goToRecipes = this.goToRecipes.bind(this);
    }
    goToRecipes(){
      const { details } = this.props;
      
      console.log(`Going to cuisine: ${details.name}!`);

      const cuisineId = details.name;
      console.log(`Going to ${cuisineId}`);
      // let's get the current URL & save it to a const.
      const currentURL = this.location.pathname;
      console.log(`Current URL: ${currentURL}`);

      // We're going to transition from / to /CookBook/:bookId
      this.props.history.push(`/CookBook/:bookId/${cuisineId}`);
    }
  render(){
    const { details } = this.props;
    return(
      <li   onClick= { () => this.goToRecipes()} 
            className="cuisine-option"
            >
        <div className="cuisine-image">
          <img src={details.image} alt={details.name} details={details.name} />
        </div>
        <div className="cuisine-name">
          <p>{details.name}</p>
        </div>
      </li>
    )
  }
}

Cuisine.contextTypes ={
  router: PropTypes.object
}


export default Cuisine;