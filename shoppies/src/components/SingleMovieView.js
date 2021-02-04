import React, { Component } from "react";

function SingleMovieView(props){
  return (
    <div>
      single view {props.location.state.movie.Title}
      <button value={props.location.state.movie.Title} onClick={props.location.state.nominateResult}>nominate</button>
    </div>
  )
}
export default SingleMovieView;
