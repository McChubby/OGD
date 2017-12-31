import React from 'react';
import Header from './Header';
import Cuisine from './Cuisine';
import sampleCuisines from '../sample-cuisine';
// import base from '../base';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      cuisines: {},
    };
  }

  loadSamples() {
    console.log('started adding samples');
    this.setState({
      cuisines: sampleCuisines,
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="cuisine">
          <ul className="cuisine-options">
            {
              Object
                .keys(this.state.cuisines)
                .map(key => 
                            {<Cuisine 
                               key={key} 
                               index={key} 
                               details={ this.state.cuisines[key] }
                            />)}
            }
          </ul>
        </div>
        <button onClick={this.loadSamples}>Load Sample Cuisine</button>
      </div>
    )
  }
}

export default App;