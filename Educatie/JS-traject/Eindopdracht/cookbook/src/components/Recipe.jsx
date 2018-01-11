import React from 'react';

class Recipe extends React.Component {
  render() {
    const recipeStyle ={
      background: 
              ` linear-gradient(
                rgba(0,0,0,0.5),
                rgba(0,0,0,0.5)
              ),
              url(${this.props.details.image}) center no-repeat `,
      backgroundSize: `cover`,
    };
    const { details } = this.props;
    return (
      <div className="recipe-wrapper" style={recipeStyle} onClick={() => this.props.goToDish(details, details.name)}>
        <div className="recipe" >
          <p>{details.name}</p>
        </div>

      </div>
    );
  }
}

export default Recipe;
