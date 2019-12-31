const cat = require('../models').category;
const event = require('../models').event;
const users = require('../models').user;
const roles = require('../models').role;
const fav = require('../models').favorite;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.addFav = async (req, res, next) => {
	const idUser = req.userId;

	try {
		let roleUser = await roles.findOne({
			where: {
				user_id: idUser
			}
		});
		// console.log(idUser);
		// console.log(roleUser.role);
		const roless = roleUser.role;
		if (!roleUser) {
			res.status(404).json({
				msg: 'Not Found'
			});
		} else {
			if (roless == 'user') {
				let data = {
					event_id: req.body.event_id,
					user_id: idUser
				};

				const errors = [];
				// //validasi input
				if (!data.event_id) errors.push('`event_id` is required');
				if (!data.user_id) errors.push('`user_id` is required');

				const hasErrors = Boolean(errors.length);
				if (hasErrors) {
					return res.status(422).json({
						errors: errors
					});
				}
				fav.create(data).then(() => {
					res.status(200).send({
						event: data
					});
				});
			} else {
				res.status(401).json({
					msg: 'its only for User'
				});
			}
		}
	} catch (e) {
		next(e);
	}
};

//event favorite by person
//export by event Name
exports.allFav = (req, res) => {
	const idUser = req.userId;
	fav
		.findAll({
			include: [
				{
					model: event,
					as: 'events'
				}
			],
			where: {
				user_id: idUser
			},
			attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
			}
		})
		.then((data) => {
			res.status(200).send({
				fav: data
			});
		});
	// .catch((err) => {
	// 	res.status(500).json({
	// 		message: err
	// 	});
	// });
};
