import React from 'react';
import PropTypes from 'prop-types';
// import cuisineStyle from '../css/index.css';

class Cuisine extends React.Component {
  render() {
    const { details } = this.props;
    const availableRecipes = details.recipes;

    return (
      <div className="cuisine-wrapper" onClick={() => this.props.goToRecipe(availableRecipes, details.name)}>
        <div className="cuisine-option">
          <div className="cuisine-image">
            <img src={details.image} alt={details.name} details={details.name} />
          </div>
          <div className="cuisine-name">
            <div className="cuisine-name-tag">
              <p>{details.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cuisine.propTypes = {
  // location: PropTypes.string.isRequired,
};

Cuisine.contextTypes = {
  router: PropTypes.object,
};


export default Cuisine;
