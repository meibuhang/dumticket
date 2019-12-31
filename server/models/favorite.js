'use strict';
module.exports = (sequelize, DataTypes) => {
	const favorite = sequelize.define(
		'favorite',
		{
			event_id: DataTypes.INTEGER,
			user_id: DataTypes.INTEGER
		},
		{}
	);
	favorite.associate = function(models) {
		// associations can be defined here
		favorite.belongsTo(models.user, {
			as: 'users',
			foreignKey: 'user_id'
		});
		favorite.belongsTo(models.event, {
			as: 'events',
			foreignKey: 'event_id'
		});
	};
	return favorite;
};
