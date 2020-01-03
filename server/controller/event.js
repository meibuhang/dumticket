const models = require("../models");

const cat = require("../models").category;
const event = require("../models").event;
const users = require("../models").user;
const roles = require("../models").role;
const favorite = models.favorite;
console.log("Processing func -> Article by Category");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// can access fields which are set previously
//console.log('id of user', req.userId);
const wrapping = (dataevents, dataUsers, dataCategories) => {
  let wrap = {
    name: dataevents.name,

    category: {
      id: dataCategories.category_id,
      name: dataCategories.name
    },
    start_time: dataevents.start_time,
    end_time: dataevents.end_time,
    price: dataevents.price,
    detail_event: dataevents.detail_event,
    location: dataevents.location,
    url_maps: dataevents.url_maps,
    image: dataevents.image,
    createdBy: {
      id: dataUsers.id,
      fullname: dataUsers.fullname,
      lastname: dataUsers.lastname,
      phone: dataUsers.phone,
      email: dataUsers.email,
      image: dataUsers.image
    }
  };
  return wrap;
};

//add user
exports.addEvent = async (req, res, next) => {
  const idUser = req.userId;
  try {
    let roleUser = await roles.findOne({
      where: {
        user_id: idUser
      }
    });
    // console.log(idUser);
    // console.log(roleUser.role);
    const roless = roleUser.id;
    console.log(roless);
    if (!roleUser) {
      res.status(404).json({
        msg: "Not Found"
      });
    } else {
      let data = {
        category_id: req.body.category_id,
        name: req.body.name,
        detail_event: req.body.detail_event,
        image: req.body.image,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        price: req.body.price,
        location: req.body.location,
        url_maps: req.body.url_maps,
        user_id: idUser,
        role: roless
      };

      const errors = [];
      // //validasi input
      if (!data.category_id) errors.push("`category` is required");
      if (!data.name) errors.push("`name` is required");
      if (!data.detail_event) errors.push("`detail event` is required");
      if (!data.image) errors.push("`image` is required");
      if (!data.start_date) errors.push("`start date` is required");
      if (!data.end_date) errors.push("`end date` is required");
      if (!data.start_time) errors.push("`start time` is required");
      if (!data.end_time) errors.push("`end time` is required");
      if (!data.price) errors.push("`price` is required");
      if (!data.location) errors.push("`location` is required");
      if (!data.url_maps) errors.push("`url_maps` is required");
      const hasErrors = Boolean(errors.length);
      if (hasErrors) {
        return res.status(422).json({
          errors: errors
        });
      }
      event.create(data).then(dataevent => {
        users
          .findOne({
            where: {
              id: idUser
            }
          })
          .then(dataUsers => {
            cat
              .findOne({
                where: {
                  id: data.category_id
                }
              })
              .then(dataCategories => {
                const wrapped = wrapping(dataevent, dataUsers, dataCategories);
                res.status(200).send(wrapped);
              });
          });
      });

      // const hasErrors = Boolean(errors.length);
      // if (hasErrors) {
      // 	return res.status(422).json({
      // 		errors: errors
      // 	});
      // }
    }
  } catch (e) {
    next(e);
  }
};

//list event

exports.allEvent = (req, res) => {
  console.log("Processing func -> Detail");

  // const {
  //     id_Cat
  // } = req.params.idCat;
  const eventId = req.params.idevent;
  const orderId = req.params.idorder;
  console.log(eventId);
  console.log(orderId);
  event
    .findAll({
      include: [
        {
          model: users,
          as: "user",
          attributes: ["id", "fullname"]
        },
        {
          model: cat,
          as: "categories",
          attributes: ["id", "name"]
        }
      ],

      order: [["createdAt", "DESC"]],
      limit: 10
    })
    .then(data => {
      res.status(200).send({
        event: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

//export by event Name
exports.eventName = (req, res) => {
  console.log("Processing func -> Detail");

  // const {
  //     id_Cat
  // } = req.params.idCat;
  const eventName = req.query.name;

  console.log(eventName);
  event
    .findAll({
      include: [
        {
          model: users,
          as: "user",
          attributes: ["id", "fullname"]
        },
        {
          model: cat,
          as: "categories",
          attributes: ["id", "name"]
        }
      ],

      order: [["createdAt", "DESC"]],
      limit: 10,
      where: {
        name: { [Op.substring]: "%" + eventName + "%" }
      }
    })
    .then(data => {
      res.status(200).send({
        event: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

//export by event date
exports.eventDate = (req, res) => {
  console.log("Processing func -> Detail");

  // const {
  //     id_Cat
  // } = req.params.idCat;
  const eventDate = req.query.startdate;

  // console.log(eventName);
  event
    .findAll({
      include: [
        {
          model: users,
          as: "user",
          attributes: ["id", "fullname"]
        },
        {
          model: cat,
          as: "categories",
          attributes: ["id", "name"]
        }
      ],

      order: [["createdAt", "DESC"]],
      limit: 10,
      where: {
        start_date: { [Op.like]: "%" + eventDate + "%" }
      }
    })
    .then(data => {
      res.status(200).send({
        event: data,
        success: true
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err,
        success: false
      });
    });
};

exports.showEventFav = (req, res) => {
  event
    .findAll({
      include: [
        {
          model: users,
          as: "favorites",
          through: {
            model: favorite
          }
        }
      ]
    })
    .then(data => {
      res.send(data);
    });
};
