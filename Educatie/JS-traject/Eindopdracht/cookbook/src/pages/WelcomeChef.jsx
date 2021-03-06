import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';
// import App from '../components/App';
class WelcomeChef extends React.Component {

  goToCookBook(event) {
    event.preventDefault();
    console.log('You changed the URL');

    // First grab the text from the input box
    const bookId = this.cookbookInput.value;
    console.log(`Going to ${bookId}!`)
    // console.log(`${router}!`)

    // We're going to transition from / to /CookBook/:bookId
    this.props.history.push(`/CookBook/${bookId}`);

  }
  render() {
    return (
      <div className="welcome-chef">
        <form className="cookbook-selector" onSubmit={e => this.goToCookBook(e)}>
          <h2>Please Enter A Name For Your CookBook</h2>
          <input
            type="text"
            requiredplaceholder="CookBook Name"
            defaultValue={getFunName()}
            ref={(input) => { this.cookbookInput = input; }}
          />
          <button type="submit">ENTER</button>
        </form>
      </div>
    );
  }
}

WelcomeChef.contextTypes = {
  router: PropTypes.object,
};

export default WelcomeChef;