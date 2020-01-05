import React, { Component } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  Typography,
  Card,
  Container,
  TextField,
  CardContent,
  TextareaAutosize
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getProfile } from "../_actions/user";
import axios from "axios";

class Editprofile extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      fullName: "",
      lastName: "",
      phone: "",
      image: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const token = localStorage.getItem("auths");

    const datas = {
      fullname: this.state.fullName,
      lastname: this.state.lastName,
      phone: this.state.phone,
      image: this.state.image
    };
    return axios({
      method: "put",
      url: "http://localhost:4500/api/dumbticket/auth/edituser",
      data: datas,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        // console.log(res.data);
        window.location = "/pages/profile"; //direct halaman
      })
      .catch(err => {
        alert("bad request");

        throw err;
      });
  };
  render() {
    const { data, isLoading, error } = this.props.user;

    return (
      <div style={{ margin: "0 auto" }}>
        <Nav />

        <div style={{ margin: "5% 80px" }}>
          {" "}
          <div
            style={{
              backgroundColor: "#ffebee",
              margin: "0 auto",

              color: "#d50000"
            }}
          >
            <Container maxWidth="lg">
              <div>
                <h2 style={{ textAlign: "center" }}>Edit Profile</h2>
              </div>
              <div style={{ width: "80%", margin: "0 10%" }}>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="fullName"
                    type="text"
                    style={{ paddingTop: "20px", color: "#616161" }}
                    onChange={this.onChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    type="text"
                    style={{ paddingTop: "20px", color: "#616161" }}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    fullWidth
                    label="Phone"
                    name="endDate"
                    type="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    onChange={this.onChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Image"
                    name="image"
                    type="text"
                    onChange={this.onChange}
                    style={{ paddingTop: "20px", color: "#616161" }}
                    required
                  />
                  <Button
                    type="submit"
                    name="register"
                    variant="outlined"
                    size="large"
                    color="primary"
                    fullWidth
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      backgroundColor: "#d50000",
                      border: "none",
                      color: "#fff"
                    }}
                  >
                    Edit Profile
                  </Button>
                </form>
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user //diambil dari redux
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => {
      dispatch(getProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);
