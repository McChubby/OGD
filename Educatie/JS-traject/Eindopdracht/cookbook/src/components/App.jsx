import React from 'react';
// import Header from './Header';
import { Route } from 'react-router-dom'; 

import Layout from '../components/Layout';

import Cuisines from '../pages/Cuisines';
import Recipes from '../pages/Recipes';
import Dish from '../pages/Dish';
import WelcomeChef from '../pages/WelcomeChef';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.updatePersons = this.updatePersons.bind(this);
    this.updateCount = this.updateCount.bind(this);

    this.state = {
      cuisines: {},
      currentCuisine: null,
      availableRecipes: null,
      availableInfo: '',
      persons: 4,
    };
  }


  setAvailableInfo = (infoFromRecipe) => {
    this.setState({
      availableInfo: infoFromRecipe,
    })
  }

  setAvailableRecipes = (recipesFromCuisine, index) => {
    this.setState({
      availableRecipes: recipesFromCuisine,
      currentCuisine: index,
    });
  }

  updateCount(newCount) { 
    this.setState(prevState => ({ persons: newCount }));
  }

  updatePersons(persons) {
    this.setState({ persons: persons });
  }
  
  render(props) {
    return (
      <div>
        <div className="cookbook">
          <Route path="/" 
            exact component={ props => 
            <Layout 
              history={props.history}
              match={props.match}
              navBtn={false}
            >
              <WelcomeChef 
                history={props.history}
                match={props.match} 
              />
            </Layout> } 
          />
          <Route path="/CookBook/:bookId/:recipeId/:dishId" 
            exact component={ props =>
              <Layout
                history={props.history}
                match={props.match} 
              >
                <Dish
                  history={props.history}
                  match={props.match} 
                  availableInfo={this.state.availableInfo}
                  persons={this.state.persons}
                  updatePersons={this.updatePersons}
                  updateCount={this.updateCount}
                  />
              </Layout> } 
          />
          <Route 
            path="/CookBook/:bookId/:recipeId" 
            exact component={ props => 
              <Layout
                history={props.history} 
                match={props.match}  
              >
                <Recipes 
                  ref={this.key}
                  history={props.history}
                  match={props.match}
                  availableRecipes={this.state.availableRecipes}
                  currentCuisine = {this.state.currentCuisine}
                  setAvailableInfo={this.setAvailableInfo}
                />
              </Layout> } 
          />
          <Route 
            path="/CookBook/:bookId" 
            exact component={ 
              props => 
              <Layout 
                history={props.history}
                match={props.match}  
              >
                <Cuisines 
                  setAvailableRecipes={this.setAvailableRecipes}
                  history={props.history}
                  match={props.match}  
                /> 
              </Layout>
            }
          />
              
          {/* All other routes */}
          {/* <Route path="*" component={NotFound}/> */}

        </div>
      </div>
    );
  }
}

export default App;
