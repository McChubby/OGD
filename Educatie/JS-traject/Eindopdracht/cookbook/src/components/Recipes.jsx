import React from 'react';
import Recipe from '../components/Recipe';
class Recipes extends React.Component {

  render() {
    const recipeStyle = {
      display:`block`,
      width: `100%`,
    };

    const { availableRecipes } = this.props;
    return (
      <div className="recipes">
        {this.props.availableRecipes ? 
            Object
                  .keys(availableRecipes)
                  .map(key =>
                    (<Recipe
                      key={key}
                      index={key}
                      details={availableRecipes[key]}
                      goToRecipe={this.goToRecipe}
                      goToDish={this.props.goToDish}
                      style={recipeStyle}
                    />),
                  )          
        : '' }

      </div>
    );
  }
}

export default Recipes;