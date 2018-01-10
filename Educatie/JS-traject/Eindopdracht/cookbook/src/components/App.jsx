import React from 'react';
// import Header from './Header';
import { Route } from 'react-router-dom'; 

// import Cuisine from '../components/Cuisine';
import Cuisines from '../pages/Cuisines';
import Recipes from '../pages/Recipes';
import Dish from '../pages/Dish';


// Imported Components
import WelcomeChef from '../pages/WelcomeChef';
// import NotFound from '../pages/NotFound';
// import base from '../base';

// import Add from './Add';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.goToDish = this.goToDish.bind(this);
    this.updatePersons = this.updatePersons.bind(this);
    this.updateCount = this.updateCount.bind(this);
    // this.props.history = this.props.history.bind(this);
    // this.availableRecipes = this.availableRecipes.bind(this);

    this.state = {
      cuisines: {},
      availableRecipes: null,
      availableInfo: '',
      persons: 4,
    };
  }

  setAvailableRecipes = (recipesFromCuisine) => {
    this.setState({
      availableRecipes: recipesFromCuisine,
    });
  }

  updateCount(newCount) { 
    this.setState(prevState => ({ persons: newCount }));
  }

  updatePersons(persons) {
    this.setState({ persons: persons });
  }

  goToDish(availableInfo) {
    // console.log(`Loading the info from ${availableInfo}`);
    this.setState({
      availableInfo: availableInfo,
    });
  }

 

  
  render(props) {
    return (
      <div>
        <div className="cookbook">
          <Route path="/" exact component={WelcomeChef} />
          <Route path="/CookBook/:bookId/Dish" exact component={Dish} />
          <Route 
            path="/CookBook/:bookId/Recipes" 
            exact component={ props => 
              <Recipes 
                availableRecipes={this.state.availableRecipes}
                goToRecipe={this.goToRecipe}
                goToDish={this.goToDish}
              /> } />
          <Route 
            path="/CookBook/:bookId" 
            exact component={ 
              props => 
              <Cuisines 
                setAvailableRecipes={this.setAvailableRecipes}
                history={props.history}
                match={props.match}  
              /> } />

              
          {/* All other routes */}
          {/* <Route path="*" component={NotFound}/> */}
        
          {/* <Cuisines 
          
          /> */}
          {/* <Recipes 
            availableRecipes={this.state.availableRecipes}
            goToDish={this.goToDish}
          /> */}
          {/* <Dish
            availableInfo={this.state.availableInfo}
            persons={this.state.persons}
            updatePersons={this.updatePersons}
            updateCount={this.updateCount}
          /> */}

        </div>
      </div>
    );
  }
}

export default App;
