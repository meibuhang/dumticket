'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('events', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			category_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'categories',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			name: {
				type: Sequelize.STRING
			},
			detail_event: {
				type: Sequelize.TEXT
			},
			image: {
				type: Sequelize.STRING
			},
			start_date: {
				type: Sequelize.STRING
			},
			end_date: {
				type: Sequelize.STRING
			},
			start_time: {
				type: Sequelize.STRING
			},
			end_time: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.INTEGER
			},
			location: {
				type: Sequelize.STRING
			},
			url_maps: {
				type: Sequelize.STRING
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			role: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'roles',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('events');
	}
};
