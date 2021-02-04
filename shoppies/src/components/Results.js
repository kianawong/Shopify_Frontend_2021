import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNominationThunk } from '../reducers'
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return { results: state.results,
           nominations: state.nominations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNomination: (nomination) => dispatch(addNominationThunk(nomination))
  }
}

export class Results extends Component{
  constructor(){
    super();
    this.nominateResult = this.nominateResult.bind(this);
  }


  nominateResult = async (evt) => {
    evt.preventDefault();
    const numOfNominations = Object.keys(this.props.nominations).length
    if(numOfNominations < 5 && !(evt.target.value in this.props.nominations)){
      const newPair = {};
      newPair[evt.target.value] = true;
      await this.props.addNomination(newPair);
    }
  }

  render(){
    const results = this.props.results
    return(

      <div>
        Results
        <ul>
        { results.map((value,index) => {
          return <li key={index}>
            <Link to={{
              pathname: `/results/${value.Title}`,
              state: {
                movie: value,
                nominateResult: this.nominateResult
              }
              }}>{value.Title}</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(Results)
