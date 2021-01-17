import React, { Component } from "react";
import searchSubmission from "../OMDbAPI";
import Results from "./Results";

class Searchbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      results: []
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

  handleSubmit = async(evt) => {
    evt.preventDefault();
    try{
     const searchResults = await searchSubmission.get(
        `"${this.state.search}"&apikey=2b7a9dff`
     );

     if(searchResults.data.Search){
        this.setState({
          ...this.state,
          results: searchResults.data.Search
        })
     } else {
        this.setState({
          ...this.state,
          results: []
        })
     }

    } catch(err){
      console.log(err);
    }


  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit} >
          <input placeholder="Enter Search Term" value={this.state.search} onChange={this.handleChange}/>
          <button type="submit" disabled={!this.state.search}> button </button>
        </form>
        { this.state.results.length > 0 && <Results results={this.state.results}/> }
      </div>
    )
  }

}

export default Searchbar;
