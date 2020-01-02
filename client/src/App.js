// import logo from './logo.svg';
import "./App.css";
//import List from './components/List';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./component/Category";
import Login from "./component/Login";

import Orderticket from "./component/Orderticket";
import Profile from "./pages/Profile";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Register from "./component/Register";
import Eventcat from "./pages/Eventcat";
import Detailevent from "./pages/Detailevent";
import Myticket from "./pages/Myticket";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pages/Eventcat/:idCat" component={Eventcat} />
            <Route path="/pages/home" component={Home} />
            <Route path="/pages/profile" component={Profile} />
            <Route path="/component/Header" component={Category} />>
            <Route path="/component/Logout" component={Login} />>
            <Route path="/component/Nav" component={Nav} />
            <Route path="/component/Register" component={Register} />
            <Route path="/pages/Detailevent/:idEvent" component={Detailevent} />
            <Route path="/pages/Myticket" component={Myticket} />
            <Route
              path="/component/Orderticket/:idEvent"
              component={Orderticket}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
