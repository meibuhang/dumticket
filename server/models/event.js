'use strict';
module.exports = (sequelize, DataTypes) => {
	const event = sequelize.define(
		'event',
		{
			category_id: DataTypes.STRING,
			name: DataTypes.STRING,
			detail_event: DataTypes.TEXT,
			image: DataTypes.STRING,
			start_date: DataTypes.STRING,
			end_date: DataTypes.STRING,
			start_time: DataTypes.STRING,
			end_time: DataTypes.STRING,
			price: DataTypes.INTEGER,
			location: DataTypes.STRING,
			url_maps: DataTypes.STRING,
			user_id: DataTypes.STRING,
			role: DataTypes.STRING
		},
		{}
	);
	event.associate = function(models) {
		// associations can be defined here
		event.belongsTo(models.category, {
			foreignKey: 'category_id',
			as: 'categories',
			sourceKey: 'id'
		});
		event.belongsTo(models.user, {
			foreignKey: 'user_id',
			as: 'user',
			sourceKey: 'id'
		});
		event.belongsTo(models.role, {
			foreignKey: 'role',
			as: 'roles',
			sourceKey: 'id'
		});
		event.hasMany(models.order, {
			foreignKey: 'id',
			as: 'order'
		});
		event.belongsToMany(models.user, {
			through: models.favorite,
			as: 'favorites',
			foreignKey: 'event_id'
		});
	};
	return event;
};
