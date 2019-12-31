import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
class Logout extends Component {
	state = {
		navigate: false
	};

	logout = () => {
		localStorage.clear('auths');
		this.setState({ navigate: true });
	};
}
export default Logout;
