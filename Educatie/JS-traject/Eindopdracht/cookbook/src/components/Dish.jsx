import React from 'react';
import Step from '../components/Step';

class Dish extends React.Component {
  render() {
    const { availableInfo } = this.props;
    return (
      <div className="dish">
        <div className="dish-image">
          <img src={availableInfo.image} alt={availableInfo.name}/>
        </div>
        <div className="dish-prep">
          <p>{availableInfo.prep} Min</p>
        </div>
        <div className="dish-card">
          <div className="dish-ingredients"></div>
        </div>
          
        
        {/* {this.props.availableInfo ? 
            Object
                  .keys(availableInfo)
                  .map(key =>
                    (<Info
                      key={key}
                      index={key}
                      details={availableInfo[key]}
                    />),
                  )          
        : `No Information added yet! Let's add some!` } */}

      </div>
    );
  }
}

export default Dish;
