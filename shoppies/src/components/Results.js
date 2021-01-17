import React, { Component } from "react";
import Nominations from "./Nominations";

class Results extends Component{
  constructor(props){
    super(props);
    this.state = {
      nominations: {},
      numberOfNominations: 0
    }
    this.nominateResult = this.nominateResult.bind(this);
  }

  nominateResult = (evt) => {
    evt.preventDefault();
    if(this.state.numberOfNominations < 5 && !(evt.target.value in this.state.nominations)){
      const newPair = {};
      newPair[evt.target.value] = true;
      this.setState({
        nominations: {...this.state.nominations, ...newPair},
        numberOfNominations: this.state.numberOfNominations+1
      })
    }
  }

  removeNomination = (evt) => {
    evt.preventDefault();
    if(evt.target.value in this.state.nominations){
      const newNominationsList = {...this.state.nominations};
      delete newNominationsList[evt.target.value];
      this.setState({
        nominations: newNominationsList,
        numberOfNominations: this.state.numberOfNominations-1
      })
    }
  }


  render(){
    const results = this.props.results
    return(

      <div>
        <div>
          { this.state.numberOfNominations > 0 &&
          <Nominations nominations={ this.state.nominations } removeNomination={ this.removeNomination }/> }
        </div>

        <ul>
        { results.map((value,index) => {
          return <li key={index}>
            {value.Title}
            <button value={value.Title} onClick={this.nominateResult}>
              Nominate
            </button>
            </li>
        })}
        </ul>
      </div>
    )
  }

}

export default Results
