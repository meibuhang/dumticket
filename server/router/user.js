const verifySignUp = require('./verifysignup');
var jwt = require('../middleware');
module.exports = function(app) {
	const controller = require('../controller/user');
	// sign up
	app.post('/api/dumbticket/auth/signup', [ verifySignUp.checkDuplicateUserNameOrEmail ], controller.signup);

	// sign in
	app.post('/api/dumbticket/auth/signin', controller.signIn);

	// edit
	app.put('/api/dumbticket/auth/edituser', [ jwt.authorized ], controller.editUser);
	
	// get
	app.get('/api/dumbticket/auth/getuser', [ jwt.authorized ], controller.getUser);
};
