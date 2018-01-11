import React from 'react';

class Header extends React.Component {
  render() {
    const params = this.props.breadCrumb;
    const navBtn = <div className="gitBack" onClick={() => this.props.history.goBack()}>&lt;</div> ;
    return (
      <div className="header">
        {this.props.navBtn === false ? '' : navBtn }
        <p>{params ? 
                params.dishId ? params.dishId : 
                params.recipeId ? params.recipeId : 
                params.bookId ? params.bookId : ''
            : 'CookBook'
              }</p>
      </div>
    )
  }
}

export default Header;
