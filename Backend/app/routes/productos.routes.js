module.exports = (app) => {
  const productos = require("../controllers/productos.controller.js");

  // Create a new Customer
  app.post("/productos", productos.create);

  // obtiene lista completa de productos
  app.get("/productos/:productosId", productos.listar);

  // obtiene margen de ganancias de un producto
  app.get("/margenProductos/:productosId", productos.listarMargenProductos);

    // obtiene margen de ganancias de un producto
  app.post("/crearMargenes/:productosId", productos.crearMargenProductos);

  // Update a Customer with customerId
  app.put("/productos/:productosId", productos.modificar);

  // Delete a Customer with customerId
  app.delete("/productos/:productosId", productos.delete);
};
