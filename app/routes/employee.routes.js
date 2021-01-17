 module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Employee
  router.post("/", employees.create);

  // Retrieve all Employees
  router.get("/", employees.findAll);

  // Update a Employee with id
  router.put("/:id", employees.update);

  // Delete a Employee with id
  router.delete("/:id", employees.delete);

  app.use('/api/employees', router);
};