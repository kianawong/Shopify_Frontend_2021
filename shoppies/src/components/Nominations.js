import React, { Component } from "react";
import { connect } from 'react-redux';
import { removeNominationThunk } from '../reducers'

const mapStateToProps = state => {
  return {
    nominations: state.nominations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeNomination: (nomination) => dispatch(removeNominationThunk(nomination))
  }
}


class Nominations extends Component{
  constructor(){
    super();
    this.removeNomination = this.removeNomination.bind(this)
  }

  removeNomination = async (evt) => {
    evt.preventDefault();
    await this.props.removeNomination(evt.target.value)
  }

  render(){
    const nominations = Object.keys( this.props.nominations );
    return (
      <div>
        {nominations.map(( value,index ) => {
          return <li key={ index }>
                    { value }
                    <button value={ value } onClick={this.removeNomination}>
                      Remove
                    </button>
                 </li>
        }) }
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nominations)
