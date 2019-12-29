const Categories = require('../models').category;

exports.addCateggories = (req, res) => {
	console.log('Processing func ->Categories');

	const datas = {
		name: req.body.name,
		image: req.body.image
	};
	Categories.create(datas)
		.then((data) => {
			res.status(200).send({
				category: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Error'
			});
		});
};

//get All Categories
exports.allCateggories = (req, res) => {
	console.log('find All data');
	Categories.findAll()
		.then((data) => {
			res.status(200).send({
				category: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
};
