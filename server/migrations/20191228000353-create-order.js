'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			event_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'events',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
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
			order_qty: {
				type: Sequelize.INTEGER
			},
			total_price: {
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('orders');
	}
};
