var jwt = require('../middleware');
module.exports = function(app) {
	const controller = require('../controller/event');
	// Add
	app.post('/api/dumbticket/event/addevent', [ jwt.authorized ], controller.addEvent);
	app.get('/api/dumbticket/event/allevent', controller.allEvent);
	app.get('/api/dumbticket/event/title', controller.eventName);
	app.get('/api/dumbticket/event/start_date', controller.eventDate);
};
