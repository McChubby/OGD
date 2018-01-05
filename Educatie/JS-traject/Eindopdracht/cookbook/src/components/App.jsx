import React from 'react';
import Header from './Header';
import Cuisine from './Cuisine';
import sampleCuisines from '../sample-cuisine';
// import base from '../base';

import Recipes from '../components/Recipes';
import Dish from '../components/Dish';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadSamples = this.loadSamples.bind(this);
    this.goToRecipe = this.goToRecipe.bind(this);
    this.goToDish = this.goToDish.bind(this);

    this.state = {
      cuisines: {},
      availableRecipes: '',
      availableInfo: '',
    };
  }

  goToDish(availableInfo) {
    console.log(`Loading the info from ${availableInfo}`);
    this.setState({
      availableInfo: availableInfo,
    });
  }

  goToRecipe(availableRecipes) {
    console.log(`Loading the recipes from ${availableRecipes}`);
    this.setState({
      availableRecipes: availableRecipes,
    });
  }

  loadSamples() {
    console.log('started adding samples');
    this.setState({
      cuisines: sampleCuisines,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="cookbook">
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
                      goToRecipe={this.goToRecipe}
                    />),
                  )
              }
            </div>
          </div>
          <Recipes 
            availableRecipes={this.state.availableRecipes}
            goToDish={this.goToDish}
          />
          <Dish
            availableInfo={this.state.availableInfo}
          />

        </div>
          <button onClick={this.loadSamples}>Load Sample Cuisine</button>
      </div>
    );
  }
}

export default App;
