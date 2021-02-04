import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import Home from "./components/Home";
import SingleMovieView from "./components/SingleMovieView";
import Searchbar from './components/Searchbar'
import Navbar from './components/Navbar';

function App() {

  return (
    <HashRouter>
    <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Searchbar />
    </div>
    <div>

    </div>
        <Route exact path="/" component={Home}/>
        <Route path="/nominations" component={Nominations}/>
        <Route exact path="/results" component={Results}/>
        <Route path="/results/:movieTitle" component={SingleMovieView}/>
    </div>
    </HashRouter>
  );
}

export default App;
