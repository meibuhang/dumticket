import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import * as auths from '../api/auth';
import Container from '@material-ui/core/Container';

function LoginForm({ onSubmit }) {
	return (
		<Container maxWidth="lg">
			<div className="formRegister">
				<Card>
					<CardContent>
						<div>
							<h2 style={{ textAlign: 'center' }}>Login</h2>
						</div>
						<div className="Register">
							<form
								noValidate
								autoComplete="off"
								onSubmit={(event) => {
									event.preventDefault();
									onSubmit(event);
								}}
							>
								<TextField fullWidth label="username" name="username" type="text" />
								<TextField fullWidth label="Password" name="password" type="password" />
								<Button
									type="submit"
									name="register"
									variant="outlined"
									size="large"
									color="primary"
									fullWidth
									style={{ marginTop: '30px', marginBottom: '20px' }}
								>
									Login
								</Button>
							</form>

							<div className="tagFormFooter" />
						</div>
					</CardContent>
				</Card>
			</div>
		</Container>
	);
}
export default class Login extends React.Component {
	handleSubmit = (event) => {
		const username = event.target.username.value;
		const password = event.target.password.value;
		try {
			auths
				.login({ username, password })
				.then(() => {
					window.location = '/';
				})
				.catch((error) => {
					alert('Gagal login');

					throw error;
				});
		} catch (e) {
			alert(e.message);
		}
	};

	render() {
		return (
			<div>
				<LoginForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}