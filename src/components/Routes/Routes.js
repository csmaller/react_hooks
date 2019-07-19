import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Music from "../Music/Music";
import CryptoChecker from "../CryptoChecker/CryptoChecker";


const Routes = ()=>{
    return(
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Hooks</Link>
          </li>
          <li>
            <Link to="/cryptochecker">Custom Hook Example </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/music" component={Music} />
        <Route  path="/cryptochecker" component={CryptoChecker} />
      </div>
    </Router>
    )
}

export default Routes;