import React from 'react';

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
}

export default Categories;