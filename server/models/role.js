'use strict';
module.exports = (sequelize, DataTypes) => {
	const role = sequelize.define(
		'role',
		{
			user_id: DataTypes.STRING,
			role: DataTypes.STRING
		},
		{}
	);
	role.associate = function(models) {
		// associations can be defined here
		role.belongsTo(models.user, {
			foreignKey: 'user_id',
			as: 'roles',
			key: 'id'
		});
	};
	return role;
};
