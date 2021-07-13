module.exports = (app) => {
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/productos", customers.create);

  // Retrieve a single Customer with customerId
  app.get("/productos/:productosId", customers.listar);

  // Update a Customer with customerId
  app.put("/productos/:productosId", customers.modificar);

  // Delete a Customer with customerId
  app.delete("/productos/:productosId", customers.delete);
};
