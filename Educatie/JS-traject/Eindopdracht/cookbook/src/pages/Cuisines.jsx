import React from 'react'; 

import Cuisine from '../components/Cuisine';
import Add from '../components/Add';
// import cuisineStyle from '../css/index.css';

import sampleCuisines from '../sample-cuisine';
class Cuisines extends React.Component {
  constructor(props) {
    super(props);

    this.goToRecipe = this.goToRecipe.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      cuisines: '',
    };
  }
  
  goToRecipe(availableRecipes, cuisineChoice) {
    const cuisineId = cuisineChoice;
    this.props.setAvailableRecipes(availableRecipes);
    this.props.history.push(`${this.props.match.url}/${cuisineId}`);
  }

  loadSamples() {
    // console.log('started adding samples');
    this.setState({
      cuisines: sampleCuisines,
    });
  }
  render(props) {
    // const { details } = this.props;
    // const availableRecipes = details.recipes;
    return (
      <div className="cuisine">
        <div className="cuisine-options">
          { 
            Object
              .keys(this.state.cuisines)
              .map(key =>
                (<Cuisine
                  key={key}
                  index={key}
                  details={this.state.cuisines[key]}
                  history={this.props.history}
                  match={this.props.match}
                  goToRecipe={this.goToRecipe}
                  setAvailableRecipes={this.props.setAvailableRecipes}
                />),
              )
          }
        </div>
        <div className="add-button-wrapper">
          <Add what="cuisine"/>
          <button onClick={this.loadSamples}>Load Sample Cuisine</button>
        </div>
      </div>
    );
  }
}

// Cuisines.propTypes = {
//   // location: PropTypes.string.isRequired,
// };

// Cuisines.contextTypes = {
//   router: PropTypes.object,
// };


export default Cuisines;
