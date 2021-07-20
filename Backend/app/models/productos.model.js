const sql = require("./db.js");

// constructor
const Productos = function (customer) {
  (this.nombre = customer.nombre),
    (this.precio = customer.precio),
    (this.ubicacion = customer.ubicacion),
    (this.stock = customer.stock);
};

Productos.create = (newCustomer, result) => {
  sql.query(
    `call SP_CREAR_PRODUCTO(?,?,?,?)`,
    [
      newCustomer.nombre,
      newCustomer.precio,
      newCustomer.ubicacion,
      newCustomer.stock,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newCustomer });
    }
  );
};

Productos.listar = (customerId, result) => {
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


Productos.listarMargenProductos = (productoId, result) => {
  sql.query(`call SP_LISTAR_PRODUCTO_MARGEN(${productoId})`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Productos.modificar = (id, customer, result) => {
  sql.query(
    "call SP_MODIFICAR_PRODUCTO (?,?,?,?,?,?)",
    [
      id,
      customer.nombre,
      customer.precio,
      customer.ubicacion,
      customer.stock,
      customer.estado,
    ],
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


Productos.remove = (id, result) => {
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
    result(null, res);
  });
};



Productos.crearMargenProductos = (margenProductos, result) => {
  sql.query(
    `call SP_CREAR_MARGENES_PRODUCTOS(?,?,?,?,?)`,
    [
      margenProductos.id,
      margenProductos.margen1,
      margenProductos.margen2,
      margenProductos.margen3,
      margenProductos.margen4
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newCustomer });
    }
  );
};

module.exports = Productos;
