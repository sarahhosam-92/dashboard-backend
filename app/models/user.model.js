module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING
    },
	address: {
      type: Sequelize.STRING
    },
	size: {
      type: Sequelize.STRING
    }
  });

  return User;
};