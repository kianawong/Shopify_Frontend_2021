import React, { Component } from "react";
import { connect } from 'react-redux';
import { setResultsThunk } from '../reducers/index'


export class Searchbar extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      search: evt.target.value
    });
  }

  async handleSubmit(evt){
    evt.preventDefault();
    await this.props.setResults(this.state.search);
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit} >
          <input placeholder="Enter Search Term" value={this.state.search} onChange={this.handleChange}/>
          <button type="submit" disabled={!this.state.search}> button </button>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
   setResults: (search) => dispatch(setResultsThunk(search))
  }
}

export const Search = connect(null, mapDispatchToProps)(Searchbar)
export default Search
