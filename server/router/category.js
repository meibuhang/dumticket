module.exports = function(app) {
	const categories = require('../controller/category');
	app.post('/api/dumbticket/category/addcategory', categories.addCateggories);
	app.get('/api/dumbticket/category/allcategory', categories.allCateggories);
	app.get('/api/dumbticket/category/:idCat/allevent', categories.allEventCategory);
	app.get('/api/dumbticket/category/event/:idEvent', categories.detailEvent);
};
