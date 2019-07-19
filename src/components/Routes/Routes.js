import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Music from "../Music/Music";
import CryptoChecker from "../CryptoChecker/CryptoChecker";
import PasswordValidator from "../PasswordValidator/PasswordValidator";


const Routes = ()=>{
    return(
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Hooks</Link>
          </li>
          <li>
            <Link to="/cryptochecker">Custom Hook - Crypto Currency </Link>
          </li>
          <li>
            <Link to="/password">Custom Hook- Password Validator</Link>
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
        <Route  path="/password" component={PasswordValidator} />
      </div>
    </Router>
    )
}

export default Routes;