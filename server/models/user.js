'use strict';
module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			fullname: DataTypes.STRING,
			lastname: DataTypes.STRING,
			phone: DataTypes.STRING,
			email: DataTypes.STRING,
			image: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING
		},
		{}
	);
	user.associate = function(models) {
		// associations can be defined here
		user.belongsTo(models.role, {
			foreignKey: 'id',
			as: 'roles',
			sourceKey: 'user_id'
		});
		user.hasMany(models.event, {
			foreignKey: 'id',
			as: 'user',
			sourceKey: 'id'
		});
		user.hasMany(models.order, {
			foreignKey: 'id',
			as: 'order',
			sourceKey: 'id'
		});
		user.belongsToMany(models.event, {
			through: models.favorite,
			as: 'events',
			foreignKey: 'user_id'
		});
	};
	return user;
};
