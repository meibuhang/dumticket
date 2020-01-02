const users = require("../models").user;
const roles = require("../models").role;
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config_secret.js");

exports.signup = (req, res) => {
  console.log("Processing func ->Register");
  const salt = bycrypt.genSaltSync(10);
  let dataemail = req.body.email;
  let roleUser = "user";
  users
    .create({
      fullname: req.body.fullname,
      lastname: req.body.lastname,
      email: dataemail,
      username: req.body.username,
      password: bycrypt.hashSync(req.body.password, salt),
      role: roleUser
    })
    .then(data => {
      const token = jwt.sign(
        {
          id: data.id
        },
        config.secret
      );
      res.status(200).send({
        // email: data.email,
        // token,
        // message: 'User registered successfully!'
        user: data,
        token,
        message: "User registered successfully!"
      });
    })
    .then(dataUsers => {
      users
        .findAll({
          where: { email: dataemail }
        })
        .then(function(dataUsers) {
          for (var i = 0; i < dataUsers.length; i++) {
            console.log(dataUsers[i].id);
            roles.create({
              user_id: dataUsers[i].id,
              role: roleUser
            });
          }
        })
        .catch(err => {
          res.status(401).json({
            message: (err, "Bad Request")
          });
        });
    })
    .catch(e => {
      res.status(500).json({
        message: "Error aaa"
      });
    });
};

// Sign In
exports.signIn = (req, res) => {
  users
    .findOne({
      where: {
        username: req.body.username
      }
    })
    .then(data => {
      if (data) {
        const auths = bycrypt.compareSync(req.body.password, data.password);
        if (auths) {
          const token = jwt.sign(
            {
              id: data.id
            },
            config.secret
          );

          res.status(200).send({
            email: data.email,
            token,
            message: "User Success Login!"
          });
        } else {
          res.status(404).send({
            message: "User not Found"
          });
        }
      }
    });
};

// Edit User
exports.editUser = async (req, res) => {
  const idUser = req.userId;
  try {
    let dataUser = await users.findOne({
      where: {
        id: idUser
      }
    });
    if (!dataUser) {
      res.status(404).json({
        msg: "Not Found"
      });
    } else {
      let input = {
        fullname: req.body.fullname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        image: req.body.image
      };

      users
        .update(input, {
          where: {
            id: idUser
          }
        })
        .then(updated => {
          res.status(200).json({
            msg: "updated",
            data: updated
          });
        })
        .catch(err => {
          res.status(401).json({
            msg: "Bad Request",
            Error: err
          });
        });
    }
  } catch (e) {
    next(e);
  }
};

//get user
exports.getUser = (req, res) => {
  const idUser = req.userId;
  users
    .findOne({
      where: {
        id: idUser
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"]
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};
