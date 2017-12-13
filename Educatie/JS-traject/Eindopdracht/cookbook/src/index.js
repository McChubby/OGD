import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Category(props){
  return(
    <div 
      className="category" 
      style={{backgroundColor: `${props.color}`}}
      onClick= { () => this.getRecipes(2)}
      >
      <h4>{props.name}</h4>
    </div>
    
  )
}
class Recipes extends React.Component {
  render() {
    return (
      <h1>Recipe {this.state.recipe} </h1>
    )
  }
}
class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      recipes : [[1,'Kong Pao Chicken'],[ 2, 'Nasi Goreng'], [3, 'Ramen'], [4, 'Raw Pad Thai']],
      categories: 
        [
          {name: 'Italian',img:'img',color:'#6FCF97'},
          {name: 'Asian', img: 'img',color: '#333333'},
          {name: 'Dutch', img: 'img', color:'#2D9CDB'},
          {name: 'American',img: 'img',color: '#EB5757'}
        ],
      breadCrumb: 'CookBook',
    }
  }

  getRecipes(i){
    <Recipes value={this.state.recipe[i]} />
  }

  renderCategory(x,y){
    return (
      <Category
        name={this.state.categories[x][y]}
        img= {this.state.categories[x]['img']}
        color= {this.state.categories[x]['color']} 
      />
    )
  }
   render (){
    
    return(
        <div className="categoryWrapper">
          {this.renderCategory(0,'name')}
          {this.renderCategory(1,'name')}
          {this.renderCategory(2,'name')}
          {this.renderCategory(3,'name')}
        </div>
    );
  }
}

class Cookbook extends React.Component {
  render(props) {
    return (
      <div className="wrapper">
        <div className="navbar">
          {this.props.value}
        </div>
        <div className="body">
          <Categories />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Cookbook value="CookBook" />,
  document.getElementById('root')
)