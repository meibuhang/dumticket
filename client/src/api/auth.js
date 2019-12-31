import request from './request';
export function login({ username, password }) {
	return request
		.post('/api/dumbticket/auth/signin', {
			username,
			password
		})
		.then((res) => res.data)
		.then((data) => {
			localStorage.setItem('auths', data.token);
		});
}

export function register({ fullname, lastname, email, username, password, role }) {
	return request
		.post('/api/dumbticket/auth/signup', {
			fullname,
			lastname,
			email,
			username,
			password,
			role
		})
		.then((res) => res.data)
		.then((data) => {
			localStorage.setItem('auths', data.token);
		});
}
