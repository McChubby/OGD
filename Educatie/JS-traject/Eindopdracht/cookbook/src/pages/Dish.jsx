import React from 'react';
import Add from '../components/Add';
// import Step from '../components/Step';

class Dish extends React.Component {
  constructor(props) {
    super(props);

    this.renderIngredient = this.renderIngredient.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCount = this.handleCount.bind(this);

    this.state = {
      persons: this.props.persons,
    }
  }


  handleChange(e) {
    const updateAmount = e.target.value;
    this.setState({ persons: e.target.value });
    this.props.updatePersons(parseInt(updateAmount, 10));
  }
  
  handleCount(count) {
    const newCount = this.props.persons + count;
    this.props.updateCount(parseInt(newCount, 10));
  }
  renderSteps(key) {
    const step = this.props.availableInfo.steps[key];
    return (
      <div key={key} className="dish-card-step">
        <div className="dish-card-step-number">{key}</div>
        <div className="dish-card-step-instruction">{step}</div>
      </div>
    );
  }
  renderIngredient(key) {
    const ingredient = this.props.availableInfo.ingredients[key];
    const serveAmount = this.props.availableInfo.numberOfServings;
    const currentServingsNeeded = this.props.persons;

    // Calculating the ingredients per dish.
    // Being able to update the ingredients based on the input of the user.
    // --------------[Calculation]------------------------------------------------------
    // Calculate the ingredient.amount by dividing it by the serveAmount, 
    // this will give back the amount for one person.
    // Multiply by the amount of the current serving needed

    return (
      <div key={key} >
        {/* Calculation for ingredients in next line -- */}
        {`${ingredient.amount ? `${ (parseInt(ingredient.amount,10) / serveAmount) * currentServingsNeeded}` : ''} 
          ${ingredient.amountType ? `${ingredient.amountType}` : ''} 
          ${ingredient.name} `}
      </div>
    );
  }
  render() {
    const { availableInfo } = this.props;
    
    return (
      <div>
        <div className="dish">
          <div className="dish-image">
            <img src={availableInfo.image} alt={availableInfo.name} />
          </div>
          <div className="dish-prep">
            <p>Prep {availableInfo.prep} Min</p>
          </div>
          <div className="dish-card">
            <div className="dish-card-persons">
              <form className="dish-card-edit" onSubmit={this.handleSubmit}>
                  <p>Persons</p>
                  <div className="dish-card-edit-input">
                    <button type="button" id="decrement" onClick={() => this.handleCount(-1)}>-</button>
                    <input type="input" id="persons" defaultValue={this.state.persons} ref={this.state.persons} onBlur={this.handleChange} />
                    <button type="button" id="increment" onClick={() => this.handleCount(+1)}>+</button>
                  </div>
                </form>
            </div>
            <span className="dish-card-divider" />
            <div className="dish-card-ingredients">
                <p>Ingredients</p>
                <div className="dish-card-ingredients-list">
                  { availableInfo ?
                    Object.keys(this.props.availableInfo.ingredients).map(this.renderIngredient)
                    : ''
                  }
                </div>
              </div>

            <span className="dish-card-divider" />
            <div className="dish-card-steps">
                <p>Steps</p>
                { availableInfo ?
                  Object.keys(this.props.availableInfo.steps).map(this.renderSteps)
                  : ''
                }
              </div>
          </div>
        </div>
        <div className="add-button-wrapper">
          <Add what="dish"/>
        </div>
      </div>
    );
  }
}


export default Dish;
