import React, { Component } from "react";

class Nominations extends Component{
  render(){
    const nominations = Object.keys( this.props.nominations );
    return (
      <div>
        {nominations.map(( value,index ) => {
          return <li key={ index }>
                    { value }
                    <button value={ value } onClick={ this.props.removeNomination }>
                      Remove
                    </button>
                 </li>
        }) }
      </div>
    )
  }
}

export default Nominations
