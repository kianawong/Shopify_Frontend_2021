import React, { Component } from "react";
import { connect } from 'react-redux';
import { setResultsThunk } from '../reducers/index'
import { Redirect } from "react-router-dom";

export class Searchbar extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      redirect: false
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
    this.setState({
      ...this.state,
      redirect: true
    })
  }

  render(){
    if(this.state.redirect){
      this.setState({
        ...this.state,
        redirect: false
      })
      return <Redirect to='/results'/>
    } else return (
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
