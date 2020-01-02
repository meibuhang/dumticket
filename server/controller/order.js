const cat = require("../models").category;
const event = require("../models").event;
const users = require("../models").user;
const roles = require("../models").role;
const orders = require("../models").order;

//add order
exports.addOrder = async (req, res, next) => {
  const idUser = req.userId;

  try {
    let roleUser = await roles.findOne({
      where: {
        user_id: idUser
      }
    });

    console.log(idUser);
    console.log(roleUser.role);

    const roless = roleUser.role;

    if (!roleUser) {
      res.status(404).json({
        msg: "Role Not Found"
      });
    } else {
      const event_id = req.body.event_id;

      let data = {
        event_id: req.body.event_id,
        user_id: idUser,
        order_qty: req.body.order_qty,
        total_price: req.body.total_price,
        status: "pending"
      };

      const errors = [];
      // //validasi input
      if (!data.order_qty) errors.push("`Order QTY` is required");

      const hasErrors = Boolean(errors.length);
      if (hasErrors) {
        return res.status(422).json({
          errors: errors
        });
      }
      orders.create(data).then(data => {
        if (data) {
          event
            .findOne({
              include: [
                {
                  model: cat,
                  as: "categories",
                  attributes: ["id", "name"]
                },
                {
                  model: users,
                  as: "user",
                  attributes: ["fullname", "phone", "email"]
                },
                {
                  model: orders,
                  as: "order",
                  attributes: ["order_qty", "total_price", "status"]
                },
                {
                  model: roles,
                  as: "roles",
                  attributes: ["role"]
                }
              ],
              attributes: {
                exclude: ["createdAt", "updatedAt", "role", "category_id"]
              },
              where: {
                id: event_id
              }
            })
            .then(item => {
              res.send(item);
            });
        } else {
          res.status(400).json({
            message: "No Orders was Added"
          });
        }
      });
    }
  } catch (e) {
    next(e);
  }
};

exports.listOrder = (req, res) => {
  console.log("Processing func -> Detail");

  // const {
  //     id_Cat
  // } = req.params.idCat;
  const eventId = req.params.idevent;
  const orderId = req.params.idorder;
  console.log(eventId);
  console.log(orderId);
  orders
    .findOne({
      include: [
        {
          model: event,
          as: "event",
          attributes: [
            "name",
            "detail_event",
            "image",
            "start_date",
            "end_date",
            "price",
            "location"
          ],
          where: {
            id: eventId
          }
        }
      ],

      where: {
        id: orderId
      }
    })
    .then(data => {
      res.status(200).send({
        orders: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

//all order by user
exports.allOrder = (req, res) => {
  console.log("Processing func -> order");
  const idUser = req.userId;
  orders
    .findAll({
      include: [
        {
          model: event,
          as: "event",
          attributes: [
            "id",
            "name",
            "detail_event",
            "start_date",
            "start_time",
            "price",
            "location",
            "image"
          ]
        },
        {
          model: users,
          as: "user",
          attributes: ["fullname", "lastname", "email", "phone"]
        }
      ],
      where: {
        user_id: idUser
      }
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};
