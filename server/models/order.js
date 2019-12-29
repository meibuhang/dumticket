'use strict';
module.exports = (sequelize, DataTypes) => {
	const order = sequelize.define(
		'order',
		{
			event_id: DataTypes.STRING,
			user_id: DataTypes.STRING,
			order_qty: DataTypes.INTEGER,
			total_price: DataTypes.INTEGER,
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: 'pending'
			}
		},
		{}
	);
	order.associate = function(models) {
		// associations can be defined here
		order.belongsTo(models.event, {
			foreignKey: 'event_id',
			as: 'event',
			sourceKey: 'id'
		});
		order.belongsTo(models.user, {
			foreignKey: 'user_id',
			as: 'order',
			sourceKey: 'id'
		});
	};
	return order;
};
