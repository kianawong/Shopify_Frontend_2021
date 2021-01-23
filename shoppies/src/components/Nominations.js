import React, { Component } from "react";
import Searchbar from "./Searchbar";

class Nominations extends Component{
  render(){
    return (<div>

      <Searchbar />
      <h2>Nominations</h2>

      </div>)
    // const nominations = Object.keys( this.props.nominations );
    // return (
    //   <div>
    //     {nominations.map(( value,index ) => {
    //       return <li key={ index }>
    //                 { value }
    //                 <button value={ value } onClick={ this.props.removeNomination }>
    //                   Remove
    //                 </button>
    //              </li>
    //     }) }
    //   </div>
    // )
  }
}

export default Nominations
