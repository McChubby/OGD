import React from 'react';
import AddForm from '../components/AddForm';

class Add extends React.Component {

  constructor(){
    super();
    this.addForm = this.addForm.bind(this);
  }

  addForm(props) {
    const addWhat = this.props.what;
    if (addWhat === 'recipe') {
      return <AddForm whichForm='recipe' />;
    } else if (addWhat === 'cuisine') {
      return <AddForm whichForm='cuisine' />;
    } else {
      return <AddForm whichForm='dish' />;
    }

  }
  render() {
    return (
      <div className="add-button" onClick={this.addForm}>
        +
      </div>
    );
  }
}

export default Add;
