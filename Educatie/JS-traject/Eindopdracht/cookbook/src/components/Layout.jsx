import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
// import logo from '../logo.svg';

class Layout extends React.Component {
  render() {
    return (
      <div className="page">
          {/* <img src={logo} alt="" /> */}
          <Header  breadCrumb={this.props.match.params} history={this.props.history} navBtn={this.props.navBtn}/>
          <main>{this.props.children}</main>
      </div>
    );
  }
};
withRouter(Layout)
export default Layout;