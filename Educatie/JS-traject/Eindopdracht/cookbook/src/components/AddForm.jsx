import React from 'react';

class AddForm extends React.Component {
  render() {
    return (
      <form className="add-form">
        {this.props.whichForm}
      </form>
    );
  }
}

export default AddForm;
