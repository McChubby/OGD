import React from 'react';
// import Step from '../components/Step';

class Dish extends React.Component {
  constructor(props) {
    super(props);

    this.renderIngredient = this.renderIngredient.bind(this);
    this.renderSteps = this.renderSteps.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidUpdate(e) {
    // console.log(e);
    let numberOfPeople;
    // this.availableInfo.numberOfPeople ? numberOfPeople = this.availableInfo.numberOfPeople : '';
    const ingredient = this.props.availableInfo.ingredients;
    const amountOfPersons = this.props.persons;
    const isChanged = amountOfPersons
    console.log(amountOfPersons);
    ingredient ? 
      console.log(ingredient) && amountOfPersons ? console.log(amountOfPersons) 
      : ''
    :'' ;
    // const newIngredients = this.props.availableInfo.ingredients / this.state.persons;
    // console.log(newIngredients);
  }

  handleSubmit(event){
    // Being used to make the from a controlled component.
    event.preventDefault();
  }
  handleChange(e) {
    this.props.updatePersons(e.target.value);
  }
  
  handleCount(count) {
    const newCount = this.props.persons + count;
    this.props.updateCount(newCount);
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
    const amountOfPersons = this.props.persons;
    
    return (
      <div key={key} >
        {`${ingredient.amount ? `${ingredient.amount}` : ''} 
          ${ingredient.amountType ? `${ingredient.amountType}` : ''} 
          ${ingredient.name} `}
      </div>
    );
  }
  render() {
    const { persons } = this.props;
    const { availableInfo } = this.props;
    
    return (
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
                  <button id="decrement" onClick={count =>this.handleCount(-1)}>-</button>
                  <input id="persons" value={persons} ref={persons} onChange={this.handleChange} />
                  <button id="increment" onClick={count => this.handleCount(+1)}>+</button>
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
    );
  }
}


export default Dish;
