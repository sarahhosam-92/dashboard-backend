module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
	address: {
      type: Sequelize.STRING
    },
	size: {
      type: Sequelize.STRING
    }
  });

  return Employee;
};