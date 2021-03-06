var jwt = require("../middleware");
module.exports = function(app) {
  const controller = require("../controller/order");
  // Add
  app.post(
    "/api/dumbticket/order/addorder",
    [jwt.authorized],
    controller.addOrder
  );

  app.put(
    "/api/dumbticket/order/confirmed/:idOrder",
    [jwt.authorized],
    controller.editPending
  );

  app.get(
    "/api/dumbticket/event/:idevent/order/:idorder/listorder",
    [jwt.authorized],
    controller.listOrder
  );

  app.get(
    "/api/dumbticket/order/allorder",
    [jwt.authorized],
    controller.allOrder
  );

  app.get(
    "/api/dumbticket/order/allorder/pending",
    [jwt.authorized],
    controller.allOrderPending
  );
};
