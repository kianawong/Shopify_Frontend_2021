import { combineReducers } from 'redux'
import searchSubmission from "../OMDbAPI";
export const SET_RESULTS = 'SET_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const ADD_NOMINATION = 'ADD_NOMINATION';
export const REMOVE_NOMINATION = 'REMOVE_NOMINATION';

export const setResults = (results) => ({
  type: SET_RESULTS,
  results
})


export const clearResults = () => ({
  type: CLEAR_RESULTS,
})

export const addNomination = nomination => ({
  type: ADD_NOMINATION,
  nomination
})

export const removeNomination = nomination => ({
  type: REMOVE_NOMINATION,
  nomination
})

function resultsReducer(results = [], action){
  switch( action.type ){
    case SET_RESULTS:
        return action.results
    case CLEAR_RESULTS:
      return results
    default:
      return results
  }
}

function nominationsReducer(nominations = {}, action){
  switch( action.type ){
    case ADD_NOMINATION:
      return {...nominations, ...action.nomination}
    case REMOVE_NOMINATION:
      {
        const newNominationsList = {...nominations}
        if(action.nomination in newNominationsList) delete newNominationsList[action.nomination]
        return newNominationsList
      }
    default:
      return nominations
  }
}

const combinedReducers = combineReducers({
  results: resultsReducer,
  nominations: nominationsReducer
})

export default combinedReducers

export const setResultsThunk = (search) => {
 return async dispatch => {
   try{
    const results = await searchSubmission(`"${search}"&apikey=2b7a9dff`)
    dispatch(setResults(results.data.Search))
   } catch (err) {
     console.log('err')
   }
}

}


export const clearResultsThunk = () => {
  return async dispatch => {
    await dispatch(clearResults())
  }
}


export const addNominationThunk = nomination => {
  return dispatch => {
    dispatch(addNomination(nomination))
  }
}

export const removeNominationThunk = nomination => {
  return dispatch => {
    dispatch(removeNomination(nomination))
  }
}
