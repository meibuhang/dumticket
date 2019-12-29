// import logo from './logo.svg';
import './App.css';
//import List from './components/List';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Category from './component/Category';
import Login from './pages/Login';
import Nav from './component/Nav';
import Home from './Home';
import Register from './pages/Register';
// import {getCategories} from './_actions/categories'
// class App extends Component{
//   constructor(props){
//     super(props);
//       this.state = {
//         counter : 0,
//         username : "No Name"
//       };
//   }
//   render(){
//     return(
//       <div className="contener">
//         <button className="buttonStyles"
//         onClick = {() =>
//           this.setState({ counter : this.state.counter + 1, username :"Budi"})}>
//             Click Me
//         </button>
//         <p>{this.state.counter}</p>
//         <p>{this.state.username}</p>
//       <List/>
//       </div>
//     );
//   }
// }
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/component/Header">
							<Category />
						</Route>
						<Route path="/pages/Login">
							<Login />
						</Route>
						<Route path="/component/Nav">
							<Nav />
						</Route>
						<Route path="/pages/Register">
							<Register />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
