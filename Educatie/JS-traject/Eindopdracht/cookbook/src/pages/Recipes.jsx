import React from 'react';
import Recipe from '../components/Recipe';
import Add from '../components/Add';
import base from '../base';
class Recipes extends React.Component {
  constructor(props){
    super(props);
    this.goToDish = this.goToDish.bind(this);
  }

  goToDish(availableInfo, recipeChoice) {
    const dishId = recipeChoice;
    this.props.setAvailableInfo(availableInfo);
    this.props.history.push(`${this.props.match.url}/${dishId}`);
  }
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
                      goToDish={this.goToDish}
                      style={recipeStyle}
                    />),
                  )          
        : '' }
        <div className="add-button-wrapper">
          <Add what="recipe" />
        </div>
      </div>
    );
  }
}

export default Recipes;
