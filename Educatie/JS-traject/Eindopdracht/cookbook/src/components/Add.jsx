import React from 'react';

class Add extends React.Component {
  constructor(){
    super();

    this.addForm = this.addForm.bind(this);
  }

  addForm(event){
    const addWhat = this.props.what;

    if (addWhat === 'recipe'){
      alert('bam, Recipe time!');
    } else if(addWhat ==='cuisine'){
      alert('bam, Cuisine to be seen');
    } else {
      alert('bam, dish best served cold.');
    }

  }
  render(){
    return (
      <div className="add-button" onClick={this.addForm}>
        +
      </div>
    );
  }
}

export default Add;