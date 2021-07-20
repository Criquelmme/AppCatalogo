const Productos = require("../models/productos.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Customer
  const productos = new Productos({
    nombre: req.body.nombre,
    precio: req.body.precio,
    ubicacion: req.body.ubicacion,
    stock : req.body.stock
  });

  // Save Customer in the database
  Productos.create(productos, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};


//obtener listado de productos
exports.listar = (req, res) => {
  Productos.listar(req.params.productosId, (err, data) => {
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
  Productos.modificar(
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
  Productos.remove(req.params.productosId, (err, data) => {
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


//obtener listado de margenes de productos
exports.listarMargenProductos = (req, res) => {
  Productos.listarMargenProductos(req.params.productosId, (err, data) => {
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


// Create margenes de productos
exports.crearMargenProductos = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a margen of products
  const margenProductos = new margenProductos({
    id: req.body.id,
    margen1: req.body.margen1,
    margen2: req.body.margen2,
    margen3 : req.body.margen3,
    margen4: req.body.margen4,
  });

  // Save Customer in the database
  Productos.crearMargenProductos(margenProductos, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};