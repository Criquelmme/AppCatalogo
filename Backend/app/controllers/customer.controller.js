const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    nombre: req.body.nombre,
    precio: req.body.precio,
    ubicacion: req.body.ubicacion,
    stock : req.body.stock
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};


// Find a single Customer with a customerId
exports.listar = (req, res) => {
  Customer.listar(req.params.productosId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.productosId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.productosId
        });
      }
    } else res.send(data);
  });
};

// Update a Customer identified by the customerId in the request
exports.modificar = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.modificar(
    req.params.productosId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.productosId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.productosId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.productosId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.productosId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.productosId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};


