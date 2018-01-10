import React from 'react';
import Header from './Header';
// import logo from '../logo.svg';

const Layout = props => ({
  render() {
    return(
      <div className="page">
          {/* <img src={logo} alt="" /> */}
          <Header  getHistory={this.getHistory}/>
          <main>{props.children}</main>
      </div>
    );
  },
});

export default Layout;