import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as auth from "../api/auth";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

function Register({ onSubmit }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className="formRegister">
        <Card>
          <CardContent>
            <div>
              <h2 style={{ textAlign: "center" }}>Register</h2>
            </div>
            <div className="Register">
              <form
                noValidate
                autoComplete="off"
                onSubmit={event => {
                  event.preventDefault();
                  onSubmit(event);
                }}
              >
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="First Name"
                  name="fullname"
                  type="text"
                />

                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Last Name"
                  name="lastname"
                  type="text"
                />
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                />

                <TextField
                  className={classes.margin}
                  fullWidth
                  label="username"
                  name="username"
                  type="text"
                />
                <TextField
                  className={classes.margin}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                />
                <Button
                  type="submit"
                  name="register"
                  variant="outlined"
                  size="large"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Register
                </Button>
              </form>

              <div className="tagFormFooter" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "", //sesuai permintaan state
      lastname: "",
      email: "",
      username: "",
      password: "",
      role: "user",
      error: {}
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    const newUser = {
      fullname: event.target.fullname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value
    };

    auth
      .register(newUser)
      .then(() => {
        window.location = "/"; //direct halaman
      })
      .catch(error => {
        alert("bad request");

        throw error;
      });
  };

  render() {
    return (
      <div>
        <Register onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default register;
