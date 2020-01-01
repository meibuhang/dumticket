const Categories = require('../models').category;
const event = require('../models').event;
const users = require('../models').user;
const roles = require('../models').role;
console.log('Processing func -> Article by Category');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// add category
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

// allEventCategory;

exports.allEventCategory = (req, res) => {
	console.log('find events by category');
	const idCat = req.params.idCat;
	console.log(idCat);

	// console.log(eventName);
	event
		.findAll({
			include: [
				{
					model: Categories,
					as: 'categories',
					attributes: [ 'id', 'name' ]
				}
			],

			order: [ [ 'createdAt', 'DESC' ] ],
			limit: 10,
			where: {
				category_id: idCat
			}
		})
		.then((data) => {
			res.status(200).send({
				category: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err,
				success: false
			});
		});
};

exports.detailEvent = (req, res) => {
	console.log('find events by category');
	
	const idEvent = req.params.idEvent;
	// console.log(eventName);
	event
		.findOne({
			include: [
				{
					model: Categories,
					as: 'categories',
					attributes: [ 'name' ],
				},
				{
					model: users,
					as: 'user',
					attributes: [ 'fullname','phone','image','email' ],
				}

			],
			where: {
				id: idEvent
			}
		})
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).json({
				message: err,
				success: false
			});
		});
};
