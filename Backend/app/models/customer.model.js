const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.nombre = customer.nombre,
  this.precio = customer.precio,
  this.ubicacion = customer.ubicacion,
  this.stock = customer.stock
};

Customer.create = (newCustomer, result) => {
  sql.query(`call SP_CREAR_PRODUCTO(?,?,?,?)`,
  [newCustomer.nombre, newCustomer.precio, newCustomer.ubicacion, newCustomer.stock],
    (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.listar = (customerId, result) => {
  sql.query(`call SP_LISTAR_PRODUCTO(${customerId})`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


Customer.modificar = (id, customer, result) => {
  sql.query(
    "call SP_MODIFICAR_PRODUCTO (?,?,?,?,?,?)",
    [id, customer.nombre, customer.precio, customer.ubicacion, customer.stock, customer.estado ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};
Customer.remove = (id, result) => {
  sql.query(`call SP_ELIMINAR_PRODUCTO(${id})`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(`call SP_ELIMINAR_PRODUCTO(${id})`);
    result(null, res);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Customer;
