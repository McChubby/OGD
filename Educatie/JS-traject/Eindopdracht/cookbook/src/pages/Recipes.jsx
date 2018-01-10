import React from 'react';
import Recipe from '../components/Recipe';
import Add from '../components/Add';
class Recipes extends React.Component {

  render() {
    const recipeStyle = {
      display:`block`,
      width: `100%`,
    };

    const { availableRecipes } = this.props;
    return (
      <div className="recipes">

        {console.log(this.props.availableRecipes)} 
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
        <div className="add-button-wrapper">
          <Add what="recipe"/>
        </div>
      </div>
    );
  }
}

export default Recipes;