var jwt = require('../middleware');
module.exports = function(app) {
	const controller = require('../controller/favorite');
	// Add
	app.post('/api/dumbticket/event/addFav', [ jwt.authorized ], controller.addFav);
	// app.delete('/api/dumbticket/event/addFav', [ jwt.authorized ], controller.delFav);
	app.get('/api/dumbticket/event/allfav', [ jwt.authorized ], controller.allFav);
};
