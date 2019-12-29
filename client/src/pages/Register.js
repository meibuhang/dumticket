import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { postUser } from '../_actions/user';
// import * as auth from './api/auth';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

function LoginForm({ onSubmit }) {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<div className="formRegister">
				<Card>
					<CardContent>
						<div>
							<h2 style={{ textAlign: 'center' }}>Register</h2>
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
								<TextField
									className={classes.margin}
									fullWidth
									label="Full Name"
									name="fullname"
									type="text"
								/>

								<TextField
									className={classes.margin}
									fullWidth
									label="Last Name"
									name="lastname"
									type="text"
								/>
								<TextField
									className={classes.margin}
									fullWidth
									label="Email"
									name="email"
									type="text"
								/>

								<TextField
									className={classes.margin}
									fullWidth
									label="username"
									name="username"
									type="text"
								/>
								<TextField
									className={classes.margin}
									fullWidth
									label="Password"
									name="password"
									type="password"
								/>
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

							<div className="tagForm">
								<p>
									No account?{' '}
									<Link to="/pages/Login" className="Links">
										Login
									</Link>
								</p>
							</div>
							<div className="tagFormFooter" />
						</div>
					</CardContent>
				</Card>
			</div>
		</Container>
	);
}
class Register extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		fullname: '', //sesuai permintaan state
	// 		lastname: '',
	// 		email: '',
	// 		username: '',
	// 		password: '',
	// 		index: null
	// 	};
	// }
	// handleSubmit = (event) => {
	// 	const fullname = event.target.fullname.value;
	// 	const lastname = event.target.lastname.value;
	// 	const email = event.target.email.value;
	// 	const username = event.target.username.value;
	// 	const password = event.target.password.value;

	// 	// auth
	// 	// 	.login({ username, password })
	// 	// 	.then(() => {
	// 	// 		this.props.history.push('/home'); //direct halaman
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		alert('Gagal login');

	// 	// 		throw error;
	// 	// 	});
	// };
	// handleChange = (type, value) => {
	// 	if (type == 'fullname') this.setState({ fullname: value });
	// 	if (type == 'lastname') this.setState({ lastname: value });
	// 	if (type == 'email') this.setState({ email: value });
	// 	else
	// 		//sesuai state
	// 		this.setState({ index: value });
	// };
	// handleAddCat = () => {
	// 	const cat = {
	// 		name: this.state.name //sesuai permintaan state
	// 	};
	// 	this.props.addCat(cat);
	// };

	render() {
		return (
			<div>
				<LoginForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}
export default Register;
