import AddMovie from "./compents/AddMovie/AddMovie";
import MovieList from "./compents/MovieList/MovieList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./compents/Login/Login";
import Navigation from "./compents/Navigation/Navigation";
import "./App.css";
import Details from "./compents/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={AddMovie} />
          <Route path="/:id" render={(props) => <Details {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
